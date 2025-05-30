---
title: "FAQs"
description: "Documentation and Help for Beekeeping Software and Application"
layout: "../layouts/IndexLayout.astro"
lang: "en"
---

### I cannot find the app in the Apple iOS AppStore or Google PlayStore

The b.tree beekeeping application is a pure web solution and can be installed as PWA ([wikipedia.org/wiki/Progressive_Web_App](https://en.wikipedia.org/wiki/Progressive_Web_App)). The best way to use the app is to download the PWA onto your device (Firefox does not support this function currently). In addition we are present on the Google PlayStore and iOS App Store but it is more or less the same as the PWA. You have to test yourself which one works better for you.

#### Installation PWA

- Chrome Computer & Android
  - YouTube Video: [b.tree - Tutorial - PWA Android - English](https://youtu.be/Qz_Dt4LRj3M)
  - Text description: [support.google.com/chrome/answer/9658361](https://support.google.com/chrome/answer/9658361)
- Apple iOS
  - YouTube Video: [b.tree - Tutorial - PWA iOS - Deutsch](https://youtu.be/_O5TJDFNtC0)
  - Text description: [pcmag.com/how-to/how-to-use-progressive-web-apps](https://www.pcmag.com/how-to/how-to-use-progressive-web-apps)

#### Mobile store links

- [Android PlayStore](https://play.google.com/store/apps/details?id=com.bnative)
<!-- - [iOS AppStore](https://apps.apple.com/us/app/btree-app-professional-beekeeping-software/id1115267587) -->

### Task is not visible in table

One reason could be the first movement date for the hive. The system uses the information of the hive movements to make the connection between beehives and apiaries. If you create a task before the first date of movement it will not show in the task table. To fix this problem you need to change the movement date before the date of the task or set the date of the task after the movement date.

### My feeding, treatment ... type are not available in the selection dropdown

Our system is build to maximize individual settings. You can define your own types in the options [/setting/option](https://app.btree.at/setting/option/checkup_types). The order of the selection menu is alphabetically and the favourit type will always be the first. If you don't need a type anymore you can set the modus to inactive. Careful if you delete a type which you previously used statistics and table values may be wrong or missing.

### I'm missing a field for my checkups

You can activate various fields for your tasks in the options [/setting/field](https://app.btree.at/setting/field). If you are still missing a field you can write us an email with your suggestion. We keep a user wish list and if enough users want a feature we will try to implement it. But we try to minimze the number of fields we offer, as we think that information which is not important in statistics can also be simply written in the note field.

### Speech recognition is not working

The speech recognition is dependent on the available web API and so far only works in Google Chrome and Microsoft Edge browser, it also needs active internet connection. The speak recognition is only active if you click on the button, an ongoing listening is currently not feasable moment not.

You can find the current browser support on following link: [caniuse.com/mdn-api_speechrecognitionevent](https://caniuse.com/mdn-api_speechrecognitionevent)

### NFC is not working

As with the speech recognition the NFC is limited by browser support. You will get a warning if you try to activate NFC if your browser does not support it.

You can find the current browser support on following link: [caniuse.com/webnfc](https://caniuse.com/webnfc)

As alternative you can use any NFC app on Google PlayStore or iOS AppStore and simply write the links on it. At least Android should read NFCs without any open app if you activate the option. The NFC tags themself you can buy in most online tech stores and should not be too expensive.

### How to use NFC or the QR scanner

Both NFC and QR code scanner are meant to help you work faster in the field. The most simple function is a redirect to the page you save to the NFC tag or QR code. More advanced is the usage of the hive url, if you save for example the url to a specific hive on the tag, eg. `https://app.btree.at/detail/hive/[hive_id]` and are on a page with a hive dropdown, eg. the QuickTool or when creating a new movement. The scanner will automatically select the scanned hive in the dropdown. As a real example, you go to your apiary "A" load twenty hives on your trailer to move them to you apiary "B". After loading you open the b.tree app, select new movement [/new/movement](https://app.btree.at/new/movement), select the apiary "B" you want to move and then scan your twenty hives on your trailer with the NFC tag or with the QR code.

#### Export NFC

Video explanation: [b.tree - Tutorial - NFC - English](https://youtu.be/6gaJMcWiAGA)

You can write NFCs with a third party tool or use the integrated "share" button. You find it in the footer of the app and it will show the current url. If you click on it a dialog will open which allows you to write onto a NFC tag.

#### Export QR code

Video explanation: [b.tree - Tutorial - QR Code - English](https://youtu.be/L1Cv6pYBx9Q)

On the hive table [/table/hive](https://app.btree.at/table/hive) you select the hives you want a QR code generated. Then you click on the dropdown button and select "Print QR". A dialog will open and QR codes for each selected hive will be generated. With an additional button you can open a separate window for printing. Alternative you can use a third party QR code generation tool and simply generate QR based on the urls.

### Premium membership

On the [/premium](https://app.btree.at/premium) you can pay to extend your premium membership. If you buy premium access your account gets 365 days of premium time added. If you already got credit in premium time the new time will be added to your currently running premium days, otherwise the current day will be used. If you run out of premium days you can still use the application, but you cannot use the premium features and are again inside the apiary and hive limit. This way we hope to give you a fair system without monthly or yearly automatic payment and you keep the full control when you want to pay. If the time is not added immediately after payment please try to logout and login into the app again. If this does not help feel free to contact us at office📧btree.at

### Is there an offline version?

No, b.tree only works with an internet connection. There is no offline version planned so far.

### Where is my data saved and can I save it local?

The server location is in Germany and all data is saved in an online storage database. Encrypted backups are saved on Amazon Cloud Storage (location Germany). You can download a copy of your data in csv format [/setting/company](https://app.btree.at/setting/company), we encourage you to download a copy at least yearly for safe keeping. On the table views it is also possible to export the data in csv format.

### How do I delete my account and remove all my data?

If you are one of many users in a beekeeping operation you can delete your profile and user data in the profile settings [/setting/profile](https://app.btree.at/setting/profile). If you are the only user in the beekeeping operation all the data of the operation, e.g. colonies, apiary location will also be deleted. If you only want to delete one of your operations you can delete it in the company settings [/setting/company](https://app.btree.at/setting/company). This is only possible if you are the last user in this company. In the main database backup the data will be removed after 3 months (auto deletion of backups older than 3 months). Possible invoices or mail conservations with \*@btree.at will be deleted after 7 years. If you write me an email to delete your account, please present some proof that the account belongs to you (e.g. company name).

### The hive count statistic is wrong

The main reasons why your count may be off are if you use group hives, as they do not have historical data. Therefore the group hive count is only visible in the apiary count and always reflect the current value. Another reasons why you count may be off is that if you delete a hive it wont show up in the statistics. This is true for all statistics, therefore you should set your hive inactive if it is lost or your sold it and do not delete it as all connected data will also be removed!

### About the numbers visible in the navigation

The numbers for tasks and to-dos indicate the count of tasks still open / not completed. For apiary, hive and queen, the numbers represent the respective count. For hive, the number includes possible grouphives. The numbers are updated every 5 minutes, i.e. changes are immediately visible.

### Tutorial video

On YouTube you can find a collection of tutorial videos on different topics: [b.tree | Beekeeping App Tutorial | English](https://youtube.com/playlist?list=PLtd4fnhQMyZ34CSl0_vc4dMOP3BrVoXYK)
