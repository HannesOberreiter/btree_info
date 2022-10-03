---
title: First Steps
description: "Documentation and Help for Beekeeping Software and Application"
layout: "../../layouts/IndexLayout.astro"
lang: "en"
---

### Why should I use this App?

This web application was designed to help you keep track of the recent and past beekeeping tasks of your colonies. The basic idea was an easy record keeping tool, which is mandatory for european beekeepers when applying medications and to help fulfil the notation conditions (feeding, harvesting) for certified organic beekeepers. In addition, the collected data can be used as basis for statistical analysis of the beekeeping operation efficiency. As an example, one can compare the honey yield of apiaries or judge queens on their performance ratings.

Although you can fill all your information in the app, which is especially useful if you have more than one labourer in your operation, it was meant as addition to short and precise notes on your hives directly in the field. Both in combination, notes on your hives and our beekeeping web application as tool to keep record for statistically relevant data, will allow you efficient work in the field while collecting data for measuring the efficiency.

The application may be an overkill for small hobby beekeeper with only one to two colonies, only if you like statistics and history data as we do it is still worthwhile. For big operation with more than a thousand colonies it may be also not the best fit, as labourer time management and material inventory is at that scale more of a concern. We see the application is best designed for intermediate beekeeping operation with a few dozens to few hundred colonies, especially certified organic beekeepers and their obligatory record keeping. For queen breeders the app could be a good addition to keep record of queen performances and for beekeeper communities who share colonies, so everyone is on the same track in their notes. As our web application will always give present you with the latest data without syncing needs.

### Options

It is not user friendly but the best first step is to go into the settings and define your select options. As nearly every beekeeper and country has its own methods for feeding, treatment etc. due to the diversity it would make no sense for us to predefine these options. In our application you can set most of the types in the options [/setting/option/](https://app.btree.at/setting/option/checkup_types). Here you can set types for your colony checks and visits, eg. swarm happened, added propolis traps, alcohol wash or for your harvest sources, queen mating place and so on.

If you set a type as favourite it will be sorted first in your selection menu. The other types are sorted alphabetically. You can also set types as inactive, this is best done for previously used types, because if you delete a type which you already used your statistics and table may show you wrong data. Inactive types will not show up in your selection if you create a new task (or edit) your task.

### Fields

The next step would be to select the fields you want to use when adding new tasks. You can select them as per user basis in the options [/setting/field](https://app.btree.at/setting/field). This means that every user in your operation needs to set them for themself.

### Apiaries

An apiary is the location where your colonies are permanent or as migratory beekeeper only for a period of time. To create apiaries is the best next step to setup your application. This can be done best via our interactive apiary map [/map/apiary](https://app.btree.at/map/apiary). On this map you can double click anywhere to create a new apiary on that location, via drag and drop you can move locations if you are not satisfied with it. It is also possible to edit the latitude and longitude manually, if you have a list of you locations it may be easier to create your apiaries in the apiary table [/table/apiary](https://app.btree.at/table/apiary). On the map you have a button to print your apiaries location, a slider to define the bee flight radius and with the eye symbol you can toggle inactive apiaries.

If you need to delete an apiary, it must be empty (no colonies actively on it). But be careful as it may chance your statistics if you did a harvest on this location. Therefore, if you have an apiary which was previously used, you can set them as inactive. This will preserve all the data.

### Beehives / Colonies

The main focus of any beekeeping operations are our beehives. You can create new hives with a separate form [/new/hive](https://app.btree.at/new/hive) or in the table [/table/hive](https://app.btree.at/table/hive). With the symbol near the name show two more field which help you to create multiple colonies at once, they will be numbered and the number will be at the end of the name. You can define the starting counting number with the "Start" field.

- Name: Identification of you colony, in our experience simple number system works the best eg. 2205 for the 5th hive in the year 2022.
- Apiary: Selection of the apiary location this hive belongs to, the migration date is important because if you create task before this date the system will not know on which apiary the hive was.
- Type: Selection free to use, eg nuc, swarm, breeding unit
- Status: Historical or current status of the hive, eg. sold, united, lost - queen failure, lost - AFB
- Position: Position of the hive on the apiary, this position is also reflected in the dropdown menus. If you don't use this field the hive order will be alphabetically.
- Collection Hive: You can use this entry as temporary collection point for multiple colonies, eg. nucs.

### New Tasks / Quicktool

After finished setup your app to you beekeeping operation needs you are ready to create your first tasks. The intended way is to use the Quicktool [/new/quicktool/checkup](https://app.btree.at/new/quicktool/checkup). This tool was designed to quickly create a checkup, harvest, treatment or feeding. You can chose the type of task with the first dropdown.

The next two selection are our "quick" part in the tool. You can select here hives based on their location or select them one by one with the hive dropdown.

Most fields should be self explanatory as for the date, each task could go over multiple days or one day if start and end date are the same. The button on the side of the date fields is to open two more input fields, which allows you to create repeating task, this is especially useful for task like feeding which follows a pattern or treatment.

The "amount" field for feeding, treatment and harvest does have an optionally dropdown for single and total. If you select total the current amount will be divided by the number of selected hives and equally split and saved. As example you harvest 200kg of honey on your apiary "A" with 10 colonies. You select in the Quicktool "Harvest", via the first dropdown apiary "A". The date of your harvest and as amount you enter 200 with the dropdown set to "total". If you now save the task each colony on apiary "A" will have a new harvest with 20kg of honey.

### ToDo's

They are meant as simple tasks which are not relevant for a colony or statistics, e.g. bring new pallets to apiary or check water supply on apiary. The best two options to create new tasks are on the calendar [/](https://app.btree.at/) by simply double clicking on the date you want a new ToDo to be created or with the form field [/new/todo](https://app.btree.at/new/todo). Only a few fields are available and again you can create, as with the tasks, multiple repeating ToDo's with the icon on the side of the date. ToDo's are also only possible as single day events and cannot span over multiple days as the other tasks are.

### Queens

If you want to manage your queens in our beekeeping app is optional. Each hive can only have one active queen, the active queen is decided by the fact of date of introduction. This means if you re-queen one of you colonies you don't need to set your old queen inactive, simply adding a new queen with a more recent date of introduction will do the job. Queens can be created with the queen form [/new/queen](https://app.btree.at/new/queen).

- Name: You unique identification, same as with hives you have the possibility to create more than one at once
- Birthday: Date of queen hatching
- Queen Marking: Input field for queen labeling or colour, you can click on the button on the right to get the current year colour.
- Hive: Selection of hive(s), you can leave this field empty. If you leave it empty your queens will be available in the special virgin table [/table/virgin](https://app.btree.at/table/virgin). This is useful if you have your queens in small mating units and already marked them for later insertion. If you select multiple hives the same amount of queens will be created automatically.
- Date of introduction: The date you introduced your new queen to the colony.
- Breeding line: Custom selection field example your bee breeder sellers name or father or mother breeding line, if it is a swarm cell etc.
- Mating place: Custom selection field for example to differentiate between mating places or artificial insemination.
- Mother: Open input field for mother breeding line or any other notes on ancestry. Optionally you can select one of your own queens in the next dropdown, if you used their eggs for crafting.

### Charges

Rudimentary tool to keep track of your stocks. We use it to keep track of our treatment material, sugar store and production amount. You can create a new good receipt or outgoing goods with the form [/new/charge](https://app.btree.at/new/charge) and have an overview of your stocks as table [/table/charge-stock](https://app.btree.at/table/charge-stock). If we create a new honey jar charge we write the distinct charge identification number in the corresponding field and in the note field the charge indent of the harvest we used. With this pattern we can follow the goods flow. As for sugar we use the charge ident field for the invoice number. As for outgoing charges we only to this twice a year when we make a stock count aka inventory in the storage. If you have a bigger operation there are better tools for this kind of job but for our small operation this works fine to keep track at least a little bit and fulfil the goods flow record keeping needed for our certification as organic beekeeper.
