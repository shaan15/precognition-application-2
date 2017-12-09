from twython import Twython
import json
import sys
import os
from pymongo import MongoClient

MAX_TWEETS=15000

api_keys={
	'consumer_key':'vI70TBPaAhwh9vp685pHyzDMn',
	'consumer_secret':'wmU4u5boDKBhNa6M0tZxEnOfrZBntguGJSmZX9rtPI4oZnUP0L',
	'access_token':'809769609658146816-ubgnAjPXfiy80rCATfDLb4T5lOoU77D',
	'access_token_secret':'I0bmCOc0KJ2vSWmFUu0fszc4DDvqUgHXD7xeCeyVXR4cK'
}

alltweets=Twython(api_keys['consumer_key'],api_keys['consumer_secret'],api_keys['access_token'],api_keys['access_token_secret'])

client=MongoClient('localhost',27017)
db=client['precog_ip']
collection=db['pollution']
searchQuery="%23AirPollution%20OR%20%23DelhiAirPollution%20OR%20%23cropburning%20OR%20%23delhichokes%20OR%20%23PledgeAgainstPollution%20OR%20%23delhigaschamber%20OR%20%23MyRightToBreathe%20OR%20%23delhipollution%20OR%20%23smogindelhi%20OR%20%23delhismog"
previous_id=0
minimum=sys.maxint
j=0
i=0
while i<MAX_TWEETS:
	new_tweets=alltweets.search(q=searchQuery, count=100, lang='en', include_entities=True, include_rts=True,max_id=minimum-1)
	for tweet in new_tweets['statuses']:
		if tweet['id'] != previous_id:
			
			collection.insert(json.loads(json.dumps(tweet)))
		j+=1
		previous_id=tweet['id']
		if tweet['id']<minimum:
			minimum=tweet['id']
	i+=1









