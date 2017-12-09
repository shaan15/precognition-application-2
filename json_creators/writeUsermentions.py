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

for t in m_tweets: #for Delhi air pollution, change m_tweets to tweet
	li_strs=[]
	for n in nodes:
		li_strs.append(n['id'])
	if t['user']['id_str'] not in li_strs:
		di={}
		di['id']=t['user']['id_str']
		di['group']=1
		nodes.append(di)
	if 'entities' in t:
		if t['entities']['user_mentions'] != []:
			for e in t['entities']['user_mentions']:
				print e['id_str']
				print ""
				li_strs1=[]
				for n in nodes:
					li_strs1.append(n['id'])
				if e['id_str'] not in li_strs1:
					di1={}
					di1['id']=e['id_str']
					di1['group']=1
					nodes.append(di1)
					
				di2={}
				di2['source']=t['user']['id_str']
				di2['target']=e['id_str']
				di2['value']=1
				links.append(di2)


final={}
final['nodes']=nodes
final['links']=links




with open('ums_mumbai.json', 'w') as fp:
    json.dump(final, fp)
