---
title: Erste Schritte & FAQs
description: 'Dokumentation und Hilfe zur Imkerei Software'
position: 21
category: Dokumentation
---
# Dokumentation

## b.tree - Imkerei Software & App

### Wozu diese App?

Diese Webapplikation soll dir helfen den Überblick über deine vergangenen und zukünftigen Imker Arbeiten an deinen Bienentöcken zu wahren und als einfaches Managment Tool dienen.

Die Idee ist es die Aufzeichnungspflichten (Tierarzneimittelgesetz) eines Imkers zu vereinfachen, sowie die als Bio-Imker zusätzlichen Aufzeichnungen über Fütterungen und Ernten einfach elektronisch zu führen. Die b.tree Webapplikation soll dich unterstützen diese Aufgaben zu erfüllen sowie erfolgreich deine Imkerei zu management.

Weiters bietet die App eine gute Grundlage für statistische Auswertungen, da eine gute Firma und Imkerei nur mit Analysen funktioniert. Schnell ermittelt man anschaulich ob sich gewisse Bereiche bezahlt machen oder nicht. Beispielsweise kann man einen Bienenstand in der Statistik anhand seines Honigertrages bewerten oder Königinnen an ihrer Leistung beurteilen, aber auch die benötigten Mengen an Behandlungsmitteln feststellen.

Die Applikation ist dank übersichtlichen Tabellen und einfachen Anlegen von Aufgaben auf Stand und Stock Basis für kleine Hobby-Imker als auch für große Imkereien geeignet. Durch eine grafisch ansprechende Aufbereitung und aussagekräftigen Symbolen findet man sich schnell zurecht und hat dadurch seine Aufzeichnungen überschaubar organisiert.

Auch für Imker/innen die sich mit der Zucht von Königinnen beschäftigten kann diese Applikation durch eigene Königinnen Statistiken eine interessante zusätzliche Leistungsbeurteilungs-Methode sein.

## Erste Schritte

### Optionen

Fast jede/r Imker/in hat ihre/seine eigenen Methoden in der Bienenhaltung. Um dieser Vielfalt gerecht zu werden, hat man die Möglichkeit unter **[Optionen->Einstellungen](https://www.btree.at/app/settings/#tab_options)** seine eigenen Bienenrassen, Fütterungsmethoden, Zargentypen und vieles mehr anzulegen. Dies ermöglicht es jedem die Applikation genau auf seine eigenen Bedürfnisse anzupassen.

**Aufgaben Felder**

Hier kannst du Felder ausblenden die du nicht brauchst. Sie werden dann nicht mehr im Quicktool, Tabelle und Stock Details angezeigt. Die Einstellungen werden pro User gespeichert und nicht pro Imkerei, somit kann jeder User seine eigenen Einstellungen setzen die er bevorzugt.

**Dropdown Aufgaben Typen - Inaktiv**

In den Optionen gibt es die Möglichkeit einen definierten "Typ" inaktiv zu setzen, wenn sie nicht mehr gebraucht wird (zB eine alte Behandlungsmethode). Dadurch wird diese Option nicht mehr bei neuen Aufgaben angezeigt, bleibt aber für die alten Aufgabenaufzeichnungen und Statistiken erhalten.

**Dropdown Aufgaben Typen - Favorit**

Setzt man einen "Typen" auf "Favorit" ist diese Option bei einer Neuerstellung einer Aufgabe an erster Stelle und man erspart sich dadurch das mühsame Durchsuchen durch viele verschiedenen Typen.

### Bienenstände

Eine Imkerei hat Bienenstände, dass sind die Standorte wo die Bienenstöcke stehen. Um Bienenstöcke anzulegen braucht man zuerst Bienenstände. Bienenstände kann man einfach und übersichtlich in der **[Standkarte](https://www.btree.at/app/map/)** anlegen. Diese Karte bietet den Vorteil, dass man nicht zuerst die Längen- und Breitengrade suchen muss, sondern einfach auf die Stelle, wo man den Stand haben möchte, doppelt klickt.

Zusätzlich ist es hier möglich auf Satelliten Fotos umzuschalten, verschiedene Wetter Overlays anzuzeigen und ein 2km Radius wird angezeigt. Dieser soll den ungefähren Flugradius der Bienen darstellen und kann zusätzlich über den Schieber verändert werden.

### Bienenstöcke

Das Herzstück jeder Imkerei sind unsere Bienenstöcke. Neue Stöcke legt man unter **[Tabellen->Stöcke](https://www.btree.at/app/table/hive/)** an. Dort klickt man auf den grünen Button **"Neu"**.

Felder eines Stockes:

* **Anzahl** -> Dieses Feld legt fest, wie viele Stöcke man anlegen möchte. Legt man mehr als einen Stock an, werden die Stocknamen durchnummeriert angelegt (Beispiel: Anzahl = 2, Name = Stock, Ergebnis: Stock1, Stock2).
* **Name** -> Die Bezeichnung des Stockes.
* **Stand** -> Der Bienenstand, wo sich der Stock befindet (Anm. jeder Stock benötigt einen Stand).
* **Wanderdatum** -> Gibt an seit wann dieser Stock auf diesem Stand ist, ist auch wichtig für die Analge von Aufgaben. Legt man Aufgaben vor dem ersten Wanderdatum an werden diese ignoriert. Nur Aufgaben nach der ersten Wanderung werden angezeigt.

Zusätzliche Felder:

* **Notiz** -> Platz für sonstige Anmerkungen.
* **Herkunft** -> Wie der Stock erstellt wurde, kann in den Optionen geändert werden (Schwarm, etc.).
* **Type** -> Stockbauart oder andere Informationen, kann in den Optionen geändert werden (Zander, Miniplus, Verkauft etc.).
* **Position** -> Standplatz des Stockes am Stand. Reihung erfolgt nach Position und danach nach Name.
* **Anzahl Gruppenstock** -> Möchte man nicht jeden Stock einzeln anlegen, kann man hier einen Stock definieren, der aus mehreren Stöcken besteht (Beispiel: Gruppenstock Alpha (13 Stöcke)). Meistens sinnvoll bei Ablegern, wo man nicht so genau mitschreibt.
* **Inaktivierung** -> Zeitpunkt der Inaktivierung des Stockes.

### Aufgaben anlegen

Es gibt folgende unterschiedlichen Möglichkeiten um neue Aufgaben/Arbeiten anzulegen.

#### **[Quicktool](https://www.btree.at/app/quicktool/create/hive/checkup)**

Hier kann man einfach und übersichtlich neue Aufgaben anlegen. Im ersten Dropdown **Aktion** kann man auswählen ob man eine neue Aufgabe für einen Stock oder Stand anlegen möchte. Wird Stand ausgewählt, wird automatisch für jeden Stock, der gerade auf diesen Stand ist, die Aufgabe angelegt. Wählt man Stock kann man im Dropdown **Stöcke** einen oder auch mehrere Stöcke auswählen. Zusätzlich kann bei der Menge zur Fütterung, Ernte oder Behandlung auswählen ob man die Gesamtmenge eingibt oder die Einzelmenge, bei Gesammenge wird automatisch der Wert durch die Anzahl der Stöcke dividiert. Die Aufgabe wird dann nur für den/die ausgewählten Stöcke angelegt.

#### **Aufgaben Tabelle**

In der jeweiligen Aufgaben Tabelle (zB [Tabellen->Ernten](https://www.btree.at/app/table/harvest/) kann man durch den Klick auf den Button "Neu" auch eine neue Aufgabe anlegen. Hier hat man aber nur die Möglichkeit einen Stock auszuwählen und keine Stände. In dieser Tabelle können aber auch mehrere Zeilen gefiltert und markiert werden und geändert oder gelöscht werden. Somit eine effektive Lösung um Einträge zu verwalten.

#### **[Tabellen->Stöcke](https://www.btree.at/app/table/hive/#tab_tables)**

Hier kann man zuerst die gewünschten Stöcke filtern und auswählen. Danach klickt man auf den Button "Aufgaben" und wählt die gewünschte Aufgabe aus. Danach wird man zum **Quicktool** weitergeleitet mit den ausgewählten Stöcken und Art der Aufgabe. Dies soll ein schnelles und effizientes Arbeiten ermöglichen, wenn man bestimmte Stöcke zuerst filtern kann.
*Man kann mehrere Zeilen mit dem "Alles Auswählen" Button auswählen oder mit SHIFT oder CMD/STRG und Zeilenklick.*

### **Stockkarte Drucken**

Über den Button Stockkarte (Stocktabelle & Detailansicht, Bienenstandtabelle & Detailansicht ) kann eine Stockkarte für den jeweiligen Stock ausgedruckt werden. Diese enthält zusammengefasst die wichtigsten Informationen und die gesammelten Aufgaben des ausgewählten Jahres. Ideal zum ausdrucken!

## FAQs

### Stock Aufgaben werden nicht angezeigt

Ein Grund könnte das erste Wanderdatum vom Bienenstock sein. Für das System existieren nur Stöcke in Kombination mit Bienenständen, das erste Wanderdatum ist hier ausschlaggebend für Aufgaben um eine Verbindung zwischen Stand und Aufgabe zu erstellen. Wird eine Aufabe vor dem ersten Wanderdatum angelegt, wird diese nicht angezeigt. Um das Problem zu beheben kann das Wanderdatum zB über die Wandertabelle weiter in die Vergangenheit gesetzt werden.

### Meine Fütterungsmethode (oder andere Methoden) sind nicht im System

Unser System ist so gut es geht individuell aufgebaut. Du kannst deine eigenen Methoden in den **[Optionen](https://www.btree.at/app/settings/)** definieren und somit deine eigenen Methoden definieren. Die vorgegebenen sind nur als Basis Muster angelegt.

### Sprachsteuerung funktioniert nicht

Leider ist die Sprachsteuerung noch sehr rudimentär und wird momentan nur von Chrome und Microsoft Edge unterstützt und kann hier auch etwas langsam ausfallen, da die Spracherkennung einen Internet Service von Google verwenden. Die Spracherkennung ist nur aktiv wenn man auf den Button klickt, eine dauernte Spracherkennung ist momentan für uns leider nicht möglich.

### Premium läuft aus

Unter [Membership](https://www.btree.at/app/membership/) kann man Premium Zeit kaufen bzw. verlängern. Beim Kauf werden dem Konto 365 Tage gutgeschrieben, hat man noch aktive Premium Zeit wird die neue Zeit zur aktuellen Premium Zeit addiert. Läuft die Premium Zeit aus kann man die App einfach weiter benutzen, aber hat in dieser Zeit keinen Zugriff auf die Premium Features. Damit wollen wir ein recht faires System schaffen wo die Abbrechnung nicht auf Abo Basis basiert sondern individuell angepasst werden kann.

### Gibt es eine Offline Version?

Nein, es gibt keine b.tree Version die Offline funktioniert.

### Wo werden die Daten gespeichert, kann ich die Daten bei mir speichern?

Der Serverstandort befindet sich in Deutschland und die Daten werden in einer Datenbank gespeichert. Backups werden am selben Standort aber auf einem anderen Server gespeichert, die Datenspeichern wird DSGVO konform durchgeführt. Es ist nicht möglich die Daten am PC zu speichern, aber man kann im [Optionen->Profil](https://www.btree.at/app/profile/) ein Backup aller gespeicherten Daten herunterzuladen. Das gleiche gilt für die hochgeladenen Dateien im Filemanager für Premium User.

### Wie kann ich meinen Account und alle Daten löschen?

Unter [Optionen->Profil](https://www.btree.at/app/profile/) befindet sich ein Button der es einem erlaubt alle Daten inkl. Account zu löschen. Aber Vorsicht ein Wiederherstellen ist nicht mehr möglich. Wenn du im Forum etwas geschrieben hast werden auch dort alle persönlichen Daten gelöscht. Im Hauptbackup System werden deine Daten endgültig nach 3 Monaten entfernt (automatisches Löschen von Backups älter als 3 Monaten). Mögliche Rechnungen und E-Mail Verkehr mit *@btree.at wird nach 7 Jahren gelöscht.
