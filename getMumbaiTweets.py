from twython import Twython
import json
import sys
import os
from pymongo import MongoClient

MAX_TWEETS=15000

api_keys={
	'consumer_key':'xoWB319GmXopMTaQ8tbq85zDx',
	'consumer_secret':'OAdKdjTyAPM2KDf5jGyDS0BEQGVbuEOdbUXusGz9IbQVDFUPWE',
	'access_token':'809769609658146816-up8Ir7QbxFjZ05xqN5edjWy93TcbfgV',
	'access_token_secret':'dl1Y0hFIqrUteOguwujTC1QAyXrvoccZKTbsgnMEnL8dL'
}

alltweets=Twython(api_keys['consumer_key'],api_keys['consumer_secret'],api_keys['access_token'],api_keys['access_token_secret'])

client=MongoClient('localhost',27017)
db=client['precog_ip']
collection=db['mumbai_tweet']
searchQuery="%23MumbaiRains%20OR%20%23CycloneOckhi%20OR%20%23Ockhi%20OR%20%23OpSahayam%20OR%20%23HADR"
previous_id=0
minimum=sys.maxint
j=0
i=0
while i<MAX_TWEETS:
	new_tweets=alltweets.search(q=searchQuery, count=100, lang='en', include_entities=True, include_rts=True, max_id=minimum-1)
	for tweet in new_tweets['statuses']:
		if tweet['id'] != previous_id:
			
			collection.insert(json.loads(json.dumps(tweet)))
		j+=1
		previous_id=tweet['id']
		if tweet['id']<minimum:
			minimum=tweet['id']
	i+=1









