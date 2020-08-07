---
title: First Steps & FAQs
description: 'Documentation and Help for Beekeeping Software and Application'
position: 21
category: Documentation
---

# Documentation

## b.tree - Beekeeping Software  & App

### Why should I use this App?

This web application should help you keep track of the recent and past work on your hive to preserve. The basic idea was that you must perform recordkeeping (Austria) over medication use for each hive individually. In addition, I'm organic beekeeper and there I also need records of feeding and harvesting. The b.tree web application helps me so that I fulfill my obligation to keep records. In addition, it gives me a good basis for statistical analysis because a good company and beekeeping only works with analyzes. Whether make certain areas paid or not. As an example, one can evaluate an apiary in the statistics on the basis of his honey yield, or judge queens on their performance.


The application is due to clear and responsive tables and simple creation of tasks suitable for large apiaries. Also for queen breeder this app could be a good additional performance assessment method, through its own queens statistics.

First Steps
==============

### Options

Nearly every beekeeper has its own methods due this diversity there is the possibility under **[Options->Settings](../settings/#tab_options)** his own bee races, feeding methods, frame types etc. to create. This allows its application precisely adapt to his own needs.

**Task Fields**

Here you can select which fields should be shown when you use the quick tool, table or see the hive details. It is saved per user and not per company.

**Dropdown Elements - Inactive**

In the options there is the ability to set a "Type" inactive when it is no longer needed (eg an old treatment method). With this the type do not show anymore on new tasks but for statistics and in the tables it is still available.

**Dropdown Elements - Favorite**

When you set a "Type" to "favorite" it will be chosen as standard, when you create a new task.


### Apiaries

An apiary is the location where the hives are. To create hives you need first apiaries. Apiaries can be easily and simple in the **[Apiarymap](../map/) created**. This map has the advantage that you do not have to look for the latitude and longitude first, but simply double-click the location where you want to place the apiary.

It is also possible to print the map over a button. Change to satellite view or change the weather overlay. Standard 2km radius appears on the map, this is intended to show the flight radius of bees and can also be changed with the slider.

### Beehives

The heart of any beekeeper are our beehives. New hive you can create under **[Table->Hives](../table/hive/)**. There you click on the button **'New'**.

Fields of a hive:

* **Number** -> This field specifies how many hives you want to create. If you create more than one hive, the hives get automatic a number to the name. (Example: Number = 2 Name = Hive == Hive1, Hive2)
* **Name** -> The name of the hive.
* **Apiary** -> The apiary where the hive is. (Note. Each hive needs an apiary)
* **Moving date** -> How long this hive is in this apiary.

Additional fields:

* **Note** -> Other observations.
* **Origin** -> How was the hive created can be changed in the options. (Swarm etc.)
* **Type** -> Hive type can be changed in the options. (Langstroth, Mini Plus, etc.)
* **Position** -> Hive Placement on your apiary, ordering is Position first then Name.
* **Number of group hive** -> If you want just one hive to be multiple hives you can here add the number of hives (Example: Group Hive Alpha (13 Hives)). This is mostly used for small offspring hives, where you don't need exact data entries.
* **Inactivated** -> Date when the hives was sold or inactivated.

### New Tasks

There are several ways to new tasks / work to create.

#### **[Quicktool](../quicktool/create/hive/checkup)**

Here you can create easy and simple new tasks. In the first dropdown **Action**, you can select whether you want to create a new job for a hive or apiary. Will be apiary selected, the task will be created for each hive on this apiary. If one chooses hive you can select from the dropdown **Hives** one or multiple hives. When you do feeding, harvesting or treatment you can also select if you want to enter the total amount or the single amount, if you select total amount it will automatically divide the amount with the count of hives. The task is then created for all selected hives.

#### **Task Tables**

In the respective tasks table (eg [Table->Harvesting](../table/harvest/#tab_tables)) you can create new task with the "New" Button. Here, however, you only have the option of selecting one hive and no apiaries.

#### **[Table->Hives](../table/hive/)**

Here you can first select the desired filters and hives. Then you click on the button "Tasks" and select the desired task. Then you will be forwarded to the **Quick Tool** with the selected hives and task. This is intended to enable a fast and efficient way, if you want certain hives first filtered.
*You can select multiple rows with the "Select All" button or select with SHIFT or CMD / CTRL and clicking rows.*

### Hivecard printing

The hivecard button (you find it in hive table & detail, apiary table & detail) let you print for the selected hive(s) a hivecard. This hivecard will show the task of the selected year and other important information. Perfect for printing! With the year and task number input field you can trim down your export.

## FAQs


### Hive task is not visible

One reason could be the first movement date for the hive. The system uses thsi date to make the connection between beehive and apiary. If you create a task before this first date it will not show in the task tables, as there is no connection between task and apiary. To fix this problem you could change the first movement date for the hive in question inside the movement table to an earlier date.

### My feeding method (or other methods) are not in the system

Our system is build to maximize individual settings. You can define your own types in the **[options](../settings/)**. The standard types after account creation are only meant as basic template.

### Speak recognition is not working

Our speak recognition is very basic and only works with google chrome oder microsoft edge browser, as it uses a google internet service. The speak recognition is only active if you click on the button, a ongoing listening is at the moment not possible for us.

### Premium membership

On [membership](../membership/) you can buy or extend your premium membership. If you buy premium access your account gets 365 days of premium added. If you already got premium time the new bought premium will be added to your currently running premium days. If you run out of premium credit time you can still use the application, but you cannot use the premium features. This way we hope to give you a fair system without monthly or yearly automatic payment and you keep the full control when you want to pay.

### Is there a offline version?

No, b.tree only works with a internet connection. There is no offline version planned so far.

### Where is my data saved and can I save it local?

The server location is in Germany and all data is saved in an online storage database. Backups are saved in the same location on another server and the data saving follows the GDPR rules. You cannot choose to use your local machine as alternative, but you can download a full database backup [Options->Profil](../profile/). The same things apply for premium users which use the filemanager, but the data is not saved inside the database but on an online storage device.

### How do I delete my account and remove all data?

On the [Options->Profil](../profile/) page you find a button to delete your account. But be careful there is no way to restore your account. All saved data will be lost and if you did write something in the forum all personal data will be deleted. In the main database backup the data will be removed after 3 months (auto deletion of backups older than 3 months). Possible invoices or mail conservations with *@btree.at will be deleted after 7 years.