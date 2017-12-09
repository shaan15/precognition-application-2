from pymongo import MongoClient
import json
import operator 
from datetime import datetime
import time
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
from collections import Counter
import sys
import os
import glob
import igraph as ig
import plotly
import plotly.plotly as py
from plotly.graph_objs import *
from collections import OrderedDict
from flask import Flask,render_template
from flask import Flask
import zipfile
import collections
from twython import Twython
from sklearn import preprocessing
app = Flask(__name__)

client=MongoClient('localhost',27017)
db=client['precog_ip']
collection=db['delhi_tweets']
collection1=db['mumbai_tweet']

tweets=[]
for tweet in collection.find().batch_size(400000):
	tweets.append(tweet)

m_tweets=[]
for tweet in collection1.find().batch_size(400000):
	m_tweets.append(tweet)

nodes=[]
links=[]
for t in m_tweets: #change m_tweets to tweets to get retweet graph of delhi
	li_strs=[]
	for n in nodes:
		li_strs.append(n['id'])
	if t['user']['id_str'] not in li_strs:
		di={}
		di['id']=t['user']['id_str']
		di['group']=1
		nodes.append(di)
	if 'retweeted_status' in t:
		print t['retweeted_status']['user']['id_str']
		print ""
		li_strs1=[]
		for n in nodes:
			li_strs1.append(n['id'])
		if t['retweeted_status']['user']['id_str'] not in li_strs1:
			di1={}
			di1['id']=t['retweeted_status']['user']['id_str']
			di1['group']=1
			nodes.append(di1)
		di2={}
		di2['source']=t['user']['id_str']
		di2['target']=t['retweeted_status']['user']['id_str']
		di2['value']=1
		links.append(di2)
final={}
final['nodes']=nodes
final['links']=links
with open('retweet_mumbai.json','w') as f:
	json.dump(final,f)

	# users=[]
# for t in tweets:
# 	u=t['user']
# 	if u['id'] not in users:
# 		users.append(u['id'])


# print len(tweets)
# print len(users)

# make_nodes={}
# nodes=[]
# for t in tweets:
# 	if t['user']['id'] not in make_nodes.keys():
# 		make_nodes[t['user']['id']]=t['id']
# 		di={}
# 		di['id']=t['user']['id_str']
# 		di['group']=1
# 		nodes.append(di)
# print nodes
# with open('nodes.txt','w') as f:
# 	f.write(str(nodes))
# f.close()
# links=[]
# for k,v in make_nodes.iteritems():
# 	new_users=alltweets.get_retweeters_ids(id=v)
# 	for n in new_users:
# 		if n in make_nodes.keys():
# 			di={}
# 			di['source']=str(k)
# 			di['target']=str(n)
# 			di['value']=1
# 			links.append(di)
# 			with open('links.txt','w') as fi:
# 				fi.write(str(links))
# 			fi.close()
# 			print links




