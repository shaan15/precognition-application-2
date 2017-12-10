#PrecogTask

Task A

LIBRARIES USED:

1. twython
2. pymongo
3. json
4. operator 
5. datetime
6. time
7. pandas
8. numpy
9. collections
10. sys
11. os
12. flask
13. re

Highcharts: For graphs
D3.js: For network graphs
Google Maps API: For plotting geo-locations


SOURCES USED:

1. Twitter API Documentation
2. Highcharts sample graphs
3. https://bl.ocks.org/mbostock/4062045
4. Flask Documentation
5. Stackoverflow for reference
6. https://www.jasondavies.com/wordcloud/


STEPS TO RUN THE CODE:

1. pip freeze requirements.txt - this installs all the required libraries, if not present on your system.
2. import database dump to mongo
3. python app.py - runs the flask server and displays the content. Or use gunicorn app:app.
4. Open 127.0.0.1:8000 to view the webapp.

Heroku application link: https://precog-app.herokuapp.com/
Tried hosting application on Heroku gives application error as mongodb addon on Heroku is paid, hence was unable to use that. Tried reading from flatfile but encountered memory quota exceed error. 

Used ngrok to expose local server:
http://41ab079c.ngrok.io
https://41ab079c.ngrok.io

When about to open link, please inform me 10 min in advance so that I can run the application on my system.
