---
title: API
description: 'Documentation and Help for Beekeeping Software and Application'
position: 26
category: Documentation
---
# API

## ICAL Calender API

Premium User can load the calendar data from an ICAL Url in their own calendar. Under [Options->Profil](https://www.btree.at/app/profile/) you must activate the API Key then the ICAL links will be shown.

### Google Calendar

Use the Dropdown under "other Calendar" and there you choose add via Url. After that the calendar will be shown in google calendar. Google only updates external calendar every few hours, with the free version of google calendar you cannot change this value.

<img src="./img//ical_google.jpg" alt="Google Import" loading="lazy">

### Mac/Apple Calendar

Go to "File" -> "New Calendar Abo". There you can add the URL and set an interval for reloading the data. Please choose an appropriate time interval to minimize our server load. (Eg. Queen Series only daily)

<img src="./img//ical_mac.jpg" alt="Mac Import" loading="lazy">

## Scale API

First you need to activate your api key on the profile page. You can have up to 5 different scale identifier per api key.
You are allowed to send each hour new data to our webservice per identifier.

[Github Project with Arduino Sketches](https://github.com/HannesOberreiter/bScale)

**Url for API calls: https://www.btree.at/app/api/ext/scale.php**

**Fixed Header Parameter**

* X_API_KEY   - "XXXXXX" (API Key from Profile Page) (alternative as POST/GET -> HTTP_X_API = XXXXX)

**Fixed POST/GET Parameter**

* ident   - "Test Scale" (your identifier for your scale)
* action  - "CREATE" (use "CREATE_DEMO" to only get a response from server but data wont be saved)
* timezone - "Europe/Vienna" (What current Timezone should be uses, please refer to http://php.net/manual/en/timezones.php)

**Scale POST/GET PARAMETER**

* weight  - weight information (xx.xx)
* temp1   - temperature information (xx.xx)
* temp2   - second temperature information (xx.xx)
* hum     - humidity information (xx.xx)
* rain    - rain information (xx.xx)
* note    - additional note (max. 300 characters)

**Alternative, using SMSsync**

* Change "secret" to "X_API_KEY"
* Change "message" to "sms"
* "sms" build = action;timezone;ident;weight;temp1;temp2;hum;rain;note
