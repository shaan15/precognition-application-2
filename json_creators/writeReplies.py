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
from collections import OrderedDict
from flask import Flask,render_template
from flask import Flask
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
mapping={}
for tweet in m_tweets: #for delhi, change m_tweets to tweets
	# print tweet['in_reply_to_user_id']
	u=tweet['user']
	li_strs=[]
	for ele in nodes:
		li_strs.append(ele['id'])
	if u['screen_name'] not in li_strs:
		di={}
		di['id']=u['screen_name']
		di['group']=1
		nodes.append(di)
	if tweet['in_reply_to_screen_name'] != None:
		print "yes there is a reply"
		li_strs=[]
		for ele in nodes:
			li_strs.append(ele['id'])
		if tweet['in_reply_to_screen_name'] not in li_strs:
			di={}
			di['id']=tweet['in_reply_to_screen_name']
			di['group']=1
			nodes.append(di)
		di1={}
		di1['source']=u['screen_name']
		di1['target']=tweet['in_reply_to_screen_name']
		di1['value']=1
		links.append(di1)
final={}
final['nodes']=nodes
final['links']=links




with open('reply_mumbai.json', 'w') as fp:
    json.dump(final, fp)
