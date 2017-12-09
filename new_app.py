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
from collections import OrderedDict
from flask import Flask,render_template
from flask import Flask
import re
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

#DELHI NOW!!!
original=0
retweets=0
for tweet in tweets:
	if tweet['text'].startswith('RT'):
		retweets+=1
	else:
		original+=1
org_vs_retweet=[original,retweets]

favourites=[]

for tweet in tweets:
	if tweet['text'].startswith('RT'):
		continue
	else:
		favourites.append(tweet['favorite_count'])

r_20=0
r_40=0
r_60=0
r_80=0
r_100=0
r_more100=0
for f in favourites:
	if f<20:
		r_20+=1
	elif f<40:
		r_40+=1
	elif f<60:
		r_60+=1
	elif f<80:
		r_80+=1
	elif f<100:
		r_100+=1
	else:
		r_more100+=1
fav_org=[r_20,r_40,r_60,r_80,r_100,r_more100]

onlytext=[]
onlymedia=[]
both=[]
videos=[]
photos=[]
hashtags=[]
count=0
count_url=0
count_nourl=0
count_symbol=0
count_nosymbol=0
count_um=0
count_noum=0
geo=[]
user_loc=[]
non_delhi_tweets=[]
cd=0
us=[]
createtime=[]
allwords=[]
for tweet in tweets:
	count+=1
	tokens=re.sub("(@[A-Za-z0-9]+)|([^0-9A-Za-z \t])|(\w+:\/\/\S+)"," ",tweet['text']).split()
	for to in tokens:
		allwords.append(to)
	ent=tweet['entities']
	u=tweet['user']
	#locations
	if 'geo' in tweet and tweet['geo']!=None:
		geo.append(tweet['geo'])
	if 'location' in u and u['location'] != None:
		user_loc.append(u['location'])
		if u['location']=='New Delhi, India' or u['location']=='Delhi, India' or u['location']=='Delhi' or u['location']=='New Delhi' or u['location']=='New Delhi, Delhi' or u['location']=='New Delhi, Bharat' or u['location']=='Mayur Vihar, New Delhi' or u['location']=='New Delhi: India':
			print "useless"
			cd+=1
		else:
			non_delhi_tweets.append(tweet)
			us.append(u['id'])
			createtime.append(tweet['created_at'])
	#hashtags
	if 'hashtags' in ent and ent['hashtags'] != []:
		for t in ent['hashtags']:
			hashtags.append(t['text'])
	#media (photos, videos) vs text
	if 'media' not in ent and 'extended_entities' not in ent:
		onlytext.append(tweet)
	if 'media' in ent:
		if tweet['text']==[]:
			onlymedia.append(tweet)
		else:
			both.append(tweet)
		photos.append(tweet)
		ind=ent['media'][0]
		if "video" in ind['expanded_url']:
			videos.append(tweet)
		else:
			photos.append(tweet)
	#urls
	if ent['urls'] != []:
		count_url+=1
	else:
		count_nourl+=1
	#symbols
	if ent['symbols'] != []:
		count_symbol+=1
	else:
		count_nosymbol+=1
	#user mentions
	if ent['user_mentions'] != []:
		count_um+=1
	else:
		count_noum+=1
# print geo
content=[len(onlytext), len(onlymedia), len(both)]
photos_dist=[len(photos),count-len(photos)]
videos_dist=[len(videos),count-len(videos)]
urls_dist=[count_url,count_nourl]
symbols_dist=[count_symbol,count_nosymbol]
um_dist=[count_um,count_noum]

idx=pd.DatetimeIndex(createtime)


lats=[]
longs=[]
coords=[]
for g in geo:
	lats.append(g['coordinates'][0])
	longs.append(g['coordinates'][1])
	coords.append(g['coordinates'])
print coords
count_hash=Counter()
count_hash.update(hashtags)
dicti=count_hash.most_common(10)
keys_w=[]
values_w=[]
for i in dicti:
	keys_w.append(i[0])
	values_w.append(i[1])

keys_date=[]
for t in createtime:
	token=t.split(' ')
	keys_date.append(token[2])
count_dates=Counter()
count_dates.update(keys_date)

A={}
#number of tweets by users about pollution, total number of tweets by them and total number of favourites by them for top 15 users
for tweet in tweets:
	u=tweet['user']
	if u['screen_name'] not in A:
		A[u['screen_name']]=1
	else:
		A[u['screen_name']]+=1

user2tweets = dict(sorted(A.iteritems(), key=operator.itemgetter(1), reverse=True)[:15])
status=[]
favs=[]
keys=[]
values=[]
for u,v in user2tweets.iteritems():
	keys.append(u)
	values.append(v)
	for tweet in tweets:
		if u==tweet['user']['screen_name']:
			favs.append(tweet['user']['favourites_count'])
			status.append(tweet['user']['statuses_count'])
			break

#MUMBAI NOW!!!

m_original=0
m_retweets=0
for tweet in m_tweets:
	if tweet['text'].startswith('RT'):
		m_retweets+=1
	else:
		m_original+=1
m_org_vs_retweet=[m_original,m_retweets]

m_favourites=[]

for tweet in m_tweets:
	if tweet['text'].startswith('RT'):
		continue
	else:
		m_favourites.append(tweet['favorite_count'])

m_r_20=0
m_r_40=0
m_r_60=0
m_r_80=0
m_r_100=0
m_r_more100=0
for f in m_favourites:
	if f<20:
		m_r_20+=1
	elif f<40:
		m_r_40+=1
	elif f<60:
		m_r_60+=1
	elif f<80:
		m_r_80+=1
	elif f<100:
		m_r_100+=1
	else:
		m_r_more100+=1
m_fav_org=[m_r_20,m_r_40,m_r_60,m_r_80,m_r_100,m_r_more100]

m_onlytext=[]
m_onlymedia=[]
m_both=[]
m_videos=[]
m_photos=[]
m_hashtags=[]
m_count=0
m_count_url=0
m_count_nourl=0
m_count_symbol=0
m_count_nosymbol=0
m_count_um=0
m_count_noum=0
m_geo=[]
m_user_loc=[]
non_mumbai_tweets=[]
m_cd=0
m_us=[]
m_createtime=[]
m_allwords=[]
for tweet in m_tweets:
	m_count+=1
	tokens=re.sub("(@[A-Za-z0-9]+)|([^0-9A-Za-z \t])|(\w+:\/\/\S+)"," ",tweet['text']).split()
	for to in tokens:
		m_allwords.append(to)
	ent=tweet['entities']
	u=tweet['user']
	#locations
	if 'geo' in tweet and tweet['geo']!=None:
		m_geo.append(tweet['geo'])
	if 'location' in u and u['location'] != None:
		m_user_loc.append(u['location'])
		if u['location']=='Mumbai, India' or u['location']=='Mumbai' or u['location']=='Bombay' or u['location']=='Bombay, India' or u['location']=='South Mumbai, India' or u['location']=='South Mumbai' or u['location']=='Mumbai got no where else to go':
			print "useless"
			m_cd+=1
		else:
			non_mumbai_tweets.append(tweet)
			m_us.append(u['id'])
			m_createtime.append(tweet['created_at'])
	#hashtags
	if 'hashtags' in ent and ent['hashtags'] != []:
		for t in ent['hashtags']:
			m_hashtags.append(t['text'])
	#media (photos, videos) vs text
	if 'media' not in ent and 'extended_entities' not in ent:
		m_onlytext.append(tweet)
	if 'media' in ent:
		if tweet['text']==[]:
			m_onlymedia.append(tweet)
		else:
			m_both.append(tweet)
		m_photos.append(tweet)
		ind=ent['media'][0]
		if "video" in ind['expanded_url']:
			m_videos.append(tweet)
		else:
			m_photos.append(tweet)
	#urls
	if ent['urls'] != []:
		m_count_url+=1
	else:
		m_count_nourl+=1
	#symbols
	if ent['symbols'] != []:
		m_count_symbol+=1
	else:
		m_count_nosymbol+=1
	#user mentions
	if ent['user_mentions'] != []:
		m_count_um+=1
	else:
		m_count_noum+=1

m_content=[len(m_onlytext), len(m_onlymedia), len(m_both)]
m_photos_dist=[len(m_photos),m_count-len(m_photos)]
m_videos_dist=[len(m_videos),m_count-len(m_videos)]
m_urls_dist=[m_count_url,m_count_nourl]
m_symbols_dist=[m_count_symbol,m_count_nosymbol]
m_um_dist=[m_count_um,m_count_noum]

m_lats=[]
m_longs=[]
m_coords=[]
for g in m_geo:
	m_lats.append(g['coordinates'][0])
	m_longs.append(g['coordinates'][1])
	m_coords.append(g['coordinates'])
print m_coords
m_count_hash=Counter()
m_count_hash.update(m_hashtags)
m_dicti=m_count_hash.most_common(10)
m_keys_w=[]
m_values_w=[]
for i in m_dicti:
	m_keys_w.append(i[0])
	m_values_w.append(i[1])

#ACTIVITY of non-mumbai users
# time series of tweets
m_keys_date=[]
for t in m_createtime:
	token=t.split(' ')
	m_keys_date.append(token[2])
m_count_dates=Counter()
m_count_dates.update(m_keys_date)

m_A={}
#number of tweets by users about cyclone, total number of tweets by them and total number of favourites by them for top 15 users
for tweet in m_tweets:
	u=tweet['user']
	if u['screen_name'] not in m_A:
		m_A[u['screen_name']]=1
	else:
		m_A[u['screen_name']]+=1

m_user2tweets = dict(sorted(m_A.iteritems(), key=operator.itemgetter(1), reverse=True)[:15])
m_status=[]
m_favs=[]
m_keys=[]
m_values=[]
for u,v in m_user2tweets.iteritems():
	m_keys.append(u)
	m_values.append(v)
	for tweet in m_tweets:
		if u==tweet['user']['screen_name']:
			m_favs.append(tweet['user']['favourites_count'])
			m_status.append(tweet['user']['statuses_count'])
			break
# print count_dates
d_ascending = OrderedDict(sorted(count_dates.items()))
# print d_ascending
kd=[]
vd=[]
for k,v in d_ascending.iteritems():
	kd.append(k)
	vd.append(v)
# print kd
# print vd
kd_final=[]
for k in kd:
	if k=='01' or k=='02' or k=='03' or k=='04' or k=='05':
		kd_final.append(k+" Dec")
	else:
		kd_final.append(k+" Nov")
# print kd_final

m_d_ascending = OrderedDict(sorted(m_count_dates.items()))
# print m_d_ascending
m_kd=[]
m_vd=[]
for k,v in m_d_ascending.iteritems():
	m_kd.append(k)
	m_vd.append(v)
# print m_kd
# print m_vd
m_kd_final=[]
for k in m_kd:
	m_kd_final.append(k+" Dec")
	
# print m_kd_final

allwords=' '.join(allwords)
m_allwords=' '.join(m_allwords)

print allwords

#FLASK PART
@app.route('/')
def basicanalysis():
	return render_template('basicanalysis.html',x_list=json.dumps(org_vs_retweet),y_list=json.dumps(m_org_vs_retweet),x_list_p=json.dumps(photos_dist), y_list_p=json.dumps(m_photos_dist),x_list_v=json.dumps(videos_dist), y_list_v=json.dumps(m_videos_dist),x_list_u=json.dumps(urls_dist), y_list_u=json.dumps(m_urls_dist),x_list_s=json.dumps(symbols_dist), y_list_s=json.dumps(m_symbols_dist),x_list_um=json.dumps(um_dist), y_list_um=json.dumps(m_um_dist),x_list_c=json.dumps(content), y_list_c=json.dumps(m_content),words=json.dumps(keys_w), count=json.dumps(values_w), m_words=json.dumps(m_keys_w), m_count=json.dumps(m_values_w),posts=json.dumps(values), usersids=json.dumps(keys), m_posts=json.dumps(m_values), m_usersids=json.dumps(m_keys),allposts=json.dumps(status), favs=json.dumps(favs), m_allposts=json.dumps(m_status), m_favs=json.dumps(m_favs), x_list_fo=json.dumps(fav_org),y_list_fo=json.dumps(m_fav_org), kd=json.dumps(kd_final), vd=json.dumps(vd), m_kd=json.dumps(m_kd_final), m_vd=json.dumps(m_vd))

@app.route('/geoplots_delhi')
def geoplots_delhi():
	return render_template('geoplots_delhi.html',lats=json.dumps(lats), longs=json.dumps(longs),m_lats=json.dumps(m_lats), m_longs=json.dumps(m_longs))

@app.route('/geoplots_mumbai')
def geoplots_mumbai():
	return render_template('geoplots_mumbai.html',lats=json.dumps(m_lats), longs=json.dumps(m_longs))
@app.route('/reply_delhi')
def reply_delhi():
	return render_template('reply_delhi.html')

@app.route('/reply_mumbai')
def reply_mumbai():
	return render_template('reply_mumbai.html')

@app.route('/retweet_delhi')
def retweet_delhi():
	return render_template('retweet_delhi.html')

@app.route('/retweet_mumbai')
def retweet_mumbai():
	return render_template('retweet_mumbai.html')

@app.route('/um_delhi')
def um_delhi():
	return render_template('um_delhi.html')

@app.route('/um_mumbai')
def um_mumbai():
	return render_template('um_mumbai.html')

if __name__ == '__main__':
	app.run(debug=True) 
