---
title: API (Premium Feature)
description: "Documentation and Help for Beekeeping Software and Application"
layout: "../../layouts/IndexLayout.astro"
lang: "en"
---

Active premium user do have access to our external API endpoints. Before you use it you need to activate it in the settings [/setting/profile/api](https://app.btree.at/setting/profile/api). Although it is managed at your profile level, the API will be active on company level. If you manage multiple beekeeping operations you need to activate it for each one separately, as you will also get a different key every time.

### Calender, iCal

To get your tasks, breeding events and ToDo's onto your local calendar on your phone, Google Calendar or computer you can subscribe to our iCal endpoint. iCal is a standardized format understood by most calendar apps. The calendar will automatically update, dependent on your calendar settings, and will show you the past and future 6 months of events. You will need to subscribe to each task separately, eg. feeding, harvest, ToDo. The calendar subscription is read-only, that means you cannot edit any task in your calendar.

On the API settings page you can copy the endpoints url for subscriptions, it will look like follows: `https://api.btree.at/api/v1/external/ical/TASK_NAME/API_KEY`.

Following links will help you setup your subscription:

- Google Calendar (Computer, Android and iPhone): [support.google.com/calendar/answer/37100](https://support.google.com/calendar/answer/37100)
- Mac: [support.apple.com/en-gb/guide/calendar/icl1022/mac](https://support.apple.com/en-gb/guide/calendar/icl1022/mac)
- Windows Outlook: [support.microsoft.com/en-gb/topic/cff1429c-5af6-41ec-a5b4-74f2c278e98c](https://support.microsoft.com/en-gb/topic/cff1429c-5af6-41ec-a5b4-74f2c278e98c)

Hint: If you only download the iCal file it is not live data subscription and will only show you the currently downloaded events.

### Hive Scales

First of all, we do not make or sell any hive scales. This API is simply for users who like to DIY. Our hive scale system was very simple ([/HannesOberreiter/bScale](https://github.com/HannesOberreiter/bScale)) but we stopped working on it. There are plentiful of alternative systems on the market and if you need a professional setup, we recommend the german producer [Wolf-Waagen](https://www.wolf-waagen.de/) and if you like open source and tinkering we recommend [HiveEyes](https://hiveeyes.org/), both have their own hardware and software solution. Our beekeeping app does not integrate with any third party hive scale, as we believe they already offer a perfect software solution on their own.

In addition to activate the API you need also to first create your unique identifiers, this can be done on the scale table [/table/scale_data](https://app.btree.at/table/scale_data) with the dropdown button "scale". You need to create for each hive scale a new identifier. Current limit is 10 identifier and per identifier you have one data transfer per hour.

The information on the data your want to transfer is given with query params. On the API settings page you can copy the endpoints url for to send data with a simple GET request, it will look like follows: `https://api.btree.at/api/v1/external/scale/IDENTIFIER/API_KEY?action=CREATE_DEMO&datetime=2022-09-08T09:50:23.990Z&weight=10.5&temp1=10.2&temp2=8.9&rain=15&hum=53`

The query params are defined as following:

- action: 'CREATE' or 'CREATE_DEMO' for testing, will not save data but you will receive an response
- datetime: Optional in ISO8601 format, otherwise UTC server time will be used
- weight: Optional, numeric.
- temp1: Optional, numeric for temperature
- temp2: Optional, numeric for temperature
- hum: Optional, numeric for humidity
- rain: Optional, numeric for rain amount
- note: Optional, string with maximal length of 300 characters

#### Server Responses

Success:

```json
{
  "datetime": "2022-09-08 10:02:54", // UTC time of server
  "weight": 10.5,
  "temp1": 10.2,
  "temp2": 8.9,
  "rain": 15,
  "humidity": 53,
  "note": "",
  "scale_id": 27, // your identifier ID on the server
  "id": 200977 // current entry
}
```

Error: Limit of data transfers reached:

```json
{
  "statusCode": 429,
  "statusText": "Too Many Requests",
  "errors": "you have exceeded your request limit"
}
```

Error: API or identifier wrong:

```json
{
  "statusCode": 404,
  "statusText": "Not Found",
  "errors": {
    "type": "NotFound",
    "data": {}
  }
}
```

Error: Invalid value transfererd (example weight was given as string 'abc')

```json
{
  "statusCode": 400,
  "statusText": "Bad Request",
  "errors": [
    {
      "value": "abc",
      "msg": "Invalid value",
      "param": "weight",
      "location": "query",
      "msgTranslation": {
        "de": "Falscher Wert",
        "en": "Invalid value"
      }
    }
  ]
}
```
