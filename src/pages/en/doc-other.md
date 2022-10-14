---
title: Other
description: 'Dokumentation und Hilfe zur Imkerei Software'
layout: "../../layouts/IndexLayout.astro"
lang: "en"
---

### Keyboard Shortcuts

- General
  - (h) Opens help window
  - (s) Activate speech recognition
- Calendar
  - (← left arrow) Previous month / week
  - (→ right arrow) Next month / week
- Tables
  - (← left arrow nach links) Previous page
  - (→ right arrow rechts) Next page
  - (↑ up arrow) First page
  - (↓ down arrow) Last page

### Change password

On the profile page tab credentials you can change your password [/setting/profile/credentials](https://app.btree.at/setting/profile/credentials). For security reasons you must also give your old password. On the user tab you can change the language, profile settings and delete your account [/setting/profile/user](https://app.btree.at/setting/profile/user) (no recovery possible!).

### Discontinued Filemanager

In our previous version 5.x.x it was possible to upload files onto our server. We stopped this service, your current only option is to use Dropbox as third party service, which can be connected to our beekeeping app.

### Dropbox

To add photos or files to tasks etc. you can add a Dropbox account [/setting/dropbox](https://app.btree.at/setting/dropbox). Dropbox is not for free but offers an easy to use cloud service for file management. If the connection to your Dropbox account is authenticated a special folder (b.tree - Beekeeping) will be generated inside your Dropbox account. The access to this folder will then be available for you and **all your users on the same beekeeping operation**. To remove the access you can use the corresponding button on the setting page or visit [dropbox.com/account/connected_apps](https://www.dropbox.com/account/connected_apps).

After you connected your Dropbox account you can manage your files and folders on the settings page [/setting/dropbox](https://app.btree.at/setting/dropbox). To have access to the dropbox folder or upload new images and files when creating new tasks activate the link button in the field settings [/setting/field](https://app.btree.at/setting/field). On saving an image or file to your task an ID will be saved with it and you can click on it to show the content in a small window.

### Calendar

On the main dashboard a calendar should give you a good overview of the current, past and future tasks [/](https://app.btree.at/). Here you can also move tasks via drag and drop if you quickly want to change a date or click on a task for more details. For queen breeding series you will get all steps listed according to the rearing method. In addition ToDo's are visible on the calendar and you can create new ones by double clicking on the same date.

If you got your own beehive scale connected to our API, daily weight average will be shown on a separate calendar [/calendar_scale](https://app.btree.at/calendar_scale).

### Search / Quick Access

In the top menu bar, when you click on the magnifying glass icon, it is possible to quickly access individual hives or apiaries. You will be redirected to the respective detail overview of the apiary or hive, which is a good starting point if you are looking for quick information.

### Breeding series

Since breeding methods differ between beekeeping operations, b.tree offers the possibility to define them yourself. Creating these breeding methods [/setting/rearing](https://app.btree.at/setting/rearing) may take you some time. Note that the waiting time for the breeding steps always refers to the time in hours to the previous step.

After the breeding methods have been defined, breeding series can easily be added using the following form: [/new/rearing](https://app.btree.at/new/rearing). These breeding series are also displayed in the calendar and can be subscribed to as iCal. Attention: Deleting breeding series or methods that have already been used will lead to irrevocable deletion and cannot be restored.

### Speak recognition commands

This Feature is not working in all Browsers, so far it works only with Chrome and Microsoft Edge. The speak recognition should help you to work faster and easier with the app. Following commands are integrated:

- dashboard, calendar: Redirect to starting page with calendar
- feed, feeding: Redirect to Quicktool with feed as task selected
- treatment: Redirect to Quicktool with treatment as task selected
- harvest: Redirect to Quicktool with harvest as task selected
- checkup: Redirect to Quicktool with checkup as task selected
- Name of apiary or hive: Redirect to apiary or hive detail overview page

### Multiple User / Beekeeper

If you want to add another user to your beekeeping operation visit the company settings page [/setting/company](https://app.btree.at/setting/company). You can add new users by their email address, if the address is not already registered with us an account will be automatically generated and an email will be send to the new users with instruction to reset the password as we don't send passwords per email.

For users, there are three ranks which can be changed by clicking on the rank icon. To remove users click on the remove user icon.

- Admin: Can add, change and delete everything and add or remove users.
- User: Cannot delete hives, apiaries or change the API access and cannot change the users.
- Read-Only: This user can only look at the the data, but cannot make any changes.

Hint: Premium membership is per company and not per user, ie. you only need pay premium once no matter how many users are active in your company.
