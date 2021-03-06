---
title: Other
description: 'Documentation and Help for Beekeeping Software and Application'
position: 24
category: Documentation
---

# Sonstiges

### Keyboard Shortcuts

In following tables you can use this shortcuts. (Shortcuts are not active in detail views or only for a certain table active).

**Tables:**

* **N** -> New Data
* **E** -> Edit Data
* **A** -> Select all rows
* **D** -> Deselect all rows
* **H** -> Toggle inactive
* **Arrow left** -> previous Page
* **Arrow right** -> next Page

**Dashboard:**
* **Arrow left** -> move calendar back
* **Arrow right** -> move calendar forward

**General:**

* **S** -> Open Search
* **W** -> Open Weather Widget
* **L** -> Speak Recognition

### Charge Control

The charge control are to help you keeping tracked your flow of goods. Your honey can be traced back by the batch number, but also compare and evaluate purchases. Also as organic beekeepers you must record purchased food (Austria). It also can be used as small stock management tool, types and units can be defined in the options. Two buttons at the top for **In** and **Out** are here for quick filtering of data. Premium users can also see charts and plots for your current and past stock in the statistics.

**Fields:**

* **Date** -> Date of receipt or date of filling.
* **Type** -> Type of product can be changed in the options. (Honey, feed, reagents etc.).
* **Stock** -> Your current stock, amount of In minus Out, cannot be edited is calculated
* **Amount** -> Amount of the product.
* **Price** -> Price of the unit
* **Descr.** -> Description of the product (eg: "Organic-Sugar", "Mead X-Treme").
* **Charge** -> Batch Number (Could also be a receipt number or delivery number)
* **best before** -> best before date
* **calibrate** -> before each filling you should calibrate your scale and enter here your difference
* **File** -> Link to uploaded images or files (premium user)
* **Note** -> Other Information
* **Type** -> Stock going in or out

### Profile

Basic settings like language and number format but also some extra function like to set a new password, download a backup of all your data entries (.csv, .xml, .json), clear you local storage (which could help with some table errors) and you can deleted your account on this page (no recovery possible!) [Optionen->Profil](https://www.btree.at/app/profile/).

### Filemanager (premium)

Manage your files and allows you to also download all your uploaded files as one zip file.

### Dropbox

If you don't want to use the integrated Filemanager or need more space, you can connect a Dropbox account: [Options->Dropbox](https://www.btree.at/app/dropbox/) (Only Admin user has access). When the connection is authenticated, it will generate a folder in your Dropbox (App -> b.tree - Beekeeping).

Now a custom "cloud"-button is visible near the file input fields (eg. Quicktool). If you press it, you can upload and select images to/from the before generated Dropbox folder.

Info: All users in your beekeeping operation will have access to the same folder in your Dropbox.

If you want to delete the connection use the remove button on [Options->Dropbox](https://www.btree.at/app/dropbox/) and also remove it from your Dropbox account [Dropbox](https://www.dropbox.com/account/connected_apps).

### Moving

Taking a hive to a new apiary, you need to perform a moving. This is possible in the [Hive Table](https://www.btree.at/app//table/hive/#tab_tables) or [Apiary Table](https://www.btree.at/app/table/apiary/#tab_tables). Here you select the / the desired hives or apiary and click on the button **Move**. Then select the moving date and click save.

If you have made a mistake during the movings, you can under [Options->Move Table](https://www.btree.at/app/table/move/#tab_options) delete the wrong records.

### Calendar

The calendar should provide an overview of the current, past and future tasks. From here you can also move objects (drag and drop) or display details. In breeding series you will get all steps listed.

Custom ToDo's will also be visible here, you can also check them as done with a click on the symbol. If you want quickly add ToDo's you can simply double click on the date.

If you got your own beehive scale and it is connected to our API, daily weight average will also be shown on the calendar.

### Search / Quick Access

In the top menu bar, when you click on the magnifying glass icon, it is possible to quickly access individual hives or apiaries. Then you will be redirected to the overview of the hive, here you have a very good overview of the task done on your hive. Construction of the hive and possibly data on the current Queen.

### Speak recognition

This Feature is not working in all Browsers, so far it works only with Chrome and Microsoft Edge. The speak recognition should help you to work faster and easier with the app. Following commands are working:

**GLOBAL**

* **Weather** - open/close weather widget
* **(Apiary)map** - change to apiary map page
* **Home, Dashboard** - change to dashboard
* **Load/(Bee)hive/Apiary + Hive/Apiaryname** - change to detail view of hive or apiary (Info: dot (.) inside name wont work)
* **New + Checkup/Treatment/Feed/Harvest** - change to quicktool with given parameter
* **stop** - stops speak recognition listening

**DASHBOARD**

* **task/todo + text** - creates new ToDo with current date and given text
* **show + calender/month/day** - switches between different calendar modes

**DETAIL VIEW**

* **year + yearnumber (1900)** - changes the year of shown tasks
* **date + yearnumber (1900)** - changes the year of shown tasks

**QUICKTOOL**

* **action + apiary/hive/charge** - first Dropdown
* **kind + feed/harvest/treatment/checkup** - second Dropdown
* **Select + Hive-/Apiaryname** - select hive or apiary (Info: dot (.) inside name wont work)
* **Amount + amount value (eg. 12)** - changes amount field to given value (feed, harvest and treatment)
* **Typ(e) + Type from Dropdown** - changes type dropdown
* **Mode + Open/Done** - changes checkbox to open or done
* **Save / Undone** - Save task or undone latest saved task

* **Keyboard Key - L** -> To activate the speak recognition.

### External Hive weighting system

**This function is at the moment deactivated**

### Multiple User / Beekeeper

If you want to add another user to your company, you can do this under [Options->Profile->Company](https://www.btree.at/app/profile/)to create new user or invite existing.

For users, there are three ranks:

* Admin
* User -> Cannot change ranks, cannot invite users and cannot delete the company
* Worker -> Can only work with the Quicktool and cannot delete tasks. Worker cannot work in the tables but see them. Worker can check tasks inside the calendar but not change the date (move them), also this rank has no access to the statistics.
* Read-Only -> This user can only look at the the data, but cannot make any changes. This rank can also not access the statistic pages.

Also there is the possibility to create a second company or to change the name of the existing. It cannot be deleted if other users are in the company or if it is your last company. (NB. If you want to delete the account go to [Options->Profile](https://www.btree.at/app/profile/) **Note, the data can not be recovered!**)

Premium Membership is per company and not per user, ie. you only need once Premium no matter how many users are active in your company. But for each company you need to buy Premium.

### Install with Chrome browser

Chrome browser supports to install the homepage as application, which then can be started as a normal software. First step is to visit the dashboard -> open chrome settings "..." -> "more tools" -> "add shortcut". Chrome now create a simple application wrapper around the webpage, which can be started as a normal program.

<img src="/img/install1.png" alt="Install" loading="lazy" />
<img src="/img/install2.png" alt="Install" loading="lazy" />
<img src="/img/install3.png" alt="Install" loading="lazy" />
<img src="/img/install4.png" alt="Install" loading="lazy" />

### NFC Tags

NFC tags are an easy way to quickly access hive details with your mobile phone (needs support for NFC). You can buy empty writeable NFC tags for example on Amazon. Then you need download a (free) application to write NFC (e.g. NFC Tools). Here you can read and write your NFC tags. The best way to use this is to directly access the hive details, which has the following URL logic https://www.btree.at/app/detail/hive/XXXX. The same is possible for apiary detail view https://www.btree.at/app/detail/apiary/XXXX.

After that simply stick the NFC tag on your hive and access quickly the details by swiping your mobile phone over the tag (only Android so far, iPhone wont read automatically NFC tags at the moment).

<img src="/img/nfc_tools.jpg" alt="NFC tools" loading="lazy" />
<img src="/img/nfc_tags.jpg" alt="NFC tags" loading="lazy" />
