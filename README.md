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


STEPS TO RUN THE CODE:

1. pip freeze requirements.txt - this installs all the required libraries, if not present on your system.
2. import database dump to mongo
3. python app.py - runs the flask server and displays the content.
4. Open 127.0.0.1:8000 to view the webapp.

Heroku application link: https://precog-application-2.herokuapp.com/
Tried hosting application on Heroku but given link above gives application error as mongodb addon on Heroku is paid, hence was unable to use that.

Used ngrok to expose local server: 
https://d2884e70.ngrok.io/
http://d2884e70.ngrok.io
