---
title: Sonstiges
description: 'Dokumentation und Hilfe zur Imkerei Software'
position: 24
category: Dokumentation
---

# Sonstiges

### Tastatur Kürzel

In den Tabellen können folgende Tastatur Kürzel verwendet werden. (Kürzel sind in Detail Ansicht deaktiviert bzw. nur einer Tabelle zugewiesen).

**Tabellen:**

* **N** -> Neuen Datensatz anlegen
* **E** -> Datensatz ändern
* **A** -> Alle Zeilen makieren
* **D** -> Alle Zeilen abwählen
* **H** -> Inaktive Datensätze anzeigen/verstecken
* **Pfeil links** -> vorherige Tabellen Seite
* **Pfeil rechts** -> nächste Tabellen Seite

**Dashboard:**

* **Pfeil links** -> Kalendar Seite in der Zeit zurück
* **Pfeil rechts** -> Kalendar Seite in der Zeit vorwärts

**Allgemein:**

* **S** -> Suche öffnen
* **W** -> Wetter Widget öffnen
* **L** -> Sprach Erkennung

### Chargen

Die Chargen sollen einem helfen einen Warenfluss zu führen. Man kann damit abgefüllte Honig Chargen zurückverfolgen, aber auch Einkäufe vergleichen und auswerten. Als Bio-Imker muss man eingekaufte Futtermittel und Behandlungmittel als Warenfluss aufzeichnen (AUT). Es kann auch als kleines Lager bzw. Inventur Programm benützt werden, mit der automatischen Berechnung des Lagerstandes. Eingaben können auch schnell über das Quicktool erfolgen. Typen und Einheiten können in den Optionen definiert werden. Die Knöpfe **Eingang** und **Ausgang** sind für schnelle Filterung der Daten der Tabelle. Eine grafische Analyse des Lagers ist auch möglich für Premium User in den Statistiken.

**Felder:**

* **Datum** -> Eingang oder Abfülldatum.
* **Type** -> Art des Produktes, kann in den Optionen geändert werden. (Honig, Futtermittel, Behandlungsmittel etc.).
* **Menge** -> Menge des Produktes.
* **Lager** -> Menge des Types auf Lager, Einkauf minus Ausgang. Kann nicht geändert werden wird automatisch kalkuliert.
* **Preis** -> Einzel oder Gesamtpreis des Produktes, für Vergleiche.
* **Beschr.** -> Bezeichnung / Beschreibung des Produktes (zB.: "Bio-Rohrzucker", "Met X-Treme").
* **Charge** -> Chargen Bezeichnung des Produktes (kann auch eine Leiferschein oder Rechnungnummer bei Eingang sein).
* **MHD** -> Mindesthaltbarkeitsdatum
* **Kalibrieren** -> Vor jeder Abfüllung sollte die Waage kalibriert werden, dies ermöglicht es Abweichungen aufzuzeichnen.
* **Datei** -> Einfaches verlinken auf Fotos oder Dateien (Premium).
* **Notiz** -> Platz für sonstige Anmerkungen.
* **Art** -> Ob es sich um einen Wareneingang (Einkauf) oder Ausgang (Verbrauch/Verkauf) handelt.

### Wanderungen

Möchte man einen Stock auf einen neuen Bienenstand wandern, muss man eine Wanderung durchführen. Dies ist möglich in der [Stock Tabelle](https://www.btree.at/app/table/hive/#tab_tables) oder [Stand Tabelle](https://www.btree.at/app/table/apiary/#tab_tables). Hier wählt man die gewünschten Stöcke oder Stand aus und klickt auf den Button **Wandern**. Danach wählt man das Wanderdatum und klickt auf Speichern. Hat man einen Stand ausgewählt werden alle auf den Stand befindlichen Stöcke gewandert. Die Wanderungen werden auch gespeichert und können für Aufzeichnungspflichten dienen.

Hat man bei den Wanderungen einen Fehler gemacht, kann man unter [Optionen->Wanderungen](https://www.btree.at/app/table/move/#tab_options) die falschen Datensätze löschen oder ändern.

### Profil

Hier [Optionen->Profil](https://www.btree.at/app/profile/) sind Standardeinstellungen wie Sprache oder Zahlenformat möglich, aber auch zusätzliche Funktionen wie das setzen eines neuen Passworts, Download eines Backups aller gespeicherten Daten (.csv, .xml, .json), leeren des lokalen Speichers (kann bei Problemen mit Tabellen helfen) und löschen des Zuganges bzw. der Imkerei (Achtung Daten können nach dem Löschen nicht wiederhergestellt werden!).

### Filemanager (Premium)

Ordnen und sortieren der hochgeladenen Dateien. Es ist auch möglich alle Dateien als Zip Datei runterzuladen.

### Dropbox

Als Alternative kannst du auch einen Dropbox-Account mit der App verbinden [Options->Dropbox](https://www.btree.at/app/dropbox/) (Nur Admin User haben Zugang). Wurde Dropbox erfolgreich verbunden, erstellt das System einen eigenen Ordner in deinem Dropbox Ordner (App -> b.tree - Beekeeping).

Jetzt siehst du auch einen eigenen "Wolken"-Knopf bei den Datei Eingabe Feldern (zB im Quicktool). Wenn du auf diesen Knopf klickst kommt ein eigenes Fenster wo du Dateien Hochladen kannst oder bereits bestehende im Ordner selektieren.

Info: Alle Benutzer die in deiner Imkerei angelegt sind können in diesen Ordner Dateienhochalden oder Selektieren.

Wenn du die Verbindung wieder löschen willst, benutze den "Entfernen"-Knopf auf [Options->Dropbox](https://www.btree.at/app/dropbox/) und zusätzlich entferne es von deinem Dropbox Account unter [https://www.dropbox.com/account/connected_apps](https://www.dropbox.com/account/connected_apps).

### Kalender

Der Kalender stellt eine Übersicht über die aktuellen, vergangengen und zukünftigen Aufgaben dar. Man kann von hier aus Aufgaben verschieben (Drag & Drop) oder Details anzeigen lassen. Bei Zuchtserien werden die gesamten Zuchtschritte inkl. Beschreibung aufgelistet.

Auch werden hier eigene ToDo Aufgaben angezeigt, diese können leicht mittels Doppelklick auf das Datum erstellt werden. Im Profil können österreichische Imker zusätzlich VIS auswählen und es werden, dann die Meldetage für die VIS angezeigt, hat man zusätzlich noch Newsletter aktiviert bekommt man sogar noch ein E-Mail!

Hat man eine eigene Bienenstockwaage an unsere API angeschlossen, werden auch diese Daten im Kalender angezeigt.

### Suche / Schnellzugriff

In der obersten Menüleiste, wenn man auf das **Lupen-Symbol** klickt, besteht die Möglichkeit schnell auf einzelne Stöcke oder Bienenstände zuzugreifen. Dann wird man zur Übersicht des Stockes / Standes weitergeleitet, wo man einen sehr guten Überblick über die gesetzten Aufgaben, den Aufbau des Stockes sowie ggf. die Daten der aktuellen Königin hat.

### Spracherkennung

Dieses Feature funktioniert nicht in jedem Browser (momentan nur in Google Chrome und Microsoft Edge)! Die Spracherkennung erlaubt dir ein schnelles und unkompliziertes Arbeiten. Folgende Befehle gibt es:

**GLOBAL**

* **Wetter** - öffnet Wetter Widget
* **(Stand)karte** - wechselt zu Standkarte
* **Kalender/Startseite** - wechselt zu Startseite mit Kalender
* **Load/Lade/(Bienen)stock/(Bienen)stand + Stock/Stand** - wechselt zu Stock oder Stand Details (Info Punkt (.) im Namen funktioniert nicht!)
* **Neue + Kontrolle/Behandlung/Fütterung/Ernte** - wechselt zum Quicktool mit angegeben Parameter
* **Stopp/Aufhören** - stoppt die Spracherkennung

**DASHBOARD**

* **Aufgabe, ToDo + Text** - erstellt eine offene ToDo Aufgabe mit aktuellem Datum.
* **Zeige + Kalender, Monat, Tag** - wechselt zwischen den verschiedenen Kalender Ansichten

**DETAIL Ansicht**

* **Jahr + Jahrzahl (1900)** - zeigt die Aufgaben vom angegeben Jahr
* **Datum + Jahrzahl (1900)** - zeigt die Aufgaben vom angegeben Jahr

**QUICKTOOL**

* **Aktion + Stand/Stock/Charge** - erstes Dropdown
* **Art + Fütterung/Ernte/Behandlung/Kontrolle** - zweites Dropdown
* **Select/Wähle + Stock-/Standname** - wählt Stöcke bzw. Stand aus (Info Punkt (.) im Namen funktioniert nicht!)
* **Menge + Mengenwert (12)** - ändert Mengenfeld in Fütterung, Ernte und Behandlung
* **Type + Type aus Dropdown** - ändert Type Dropdown Feld
* **Modus + Erledigt/Offen** - ändert Aufgabe auf Offen oder Erledigt
* **Speichern / Rückgängig** - speichert Aufgabe oder macht die letzte gespeicherte Rückgängig

* **Taste - L** -> Um Sprach Erkennung zu aktivieren.

### Externe Stock Waage

**Diese Funktion ist zur Zeit deaktiviert**

### Benützer / Imkereien

Arbeitet man nicht alleine in einer Imkerei oder man erlaubt die Einsicht eines anderen Imkers in die eigene hat man die Möglichkeit unter [Optionen->Profil->Imkerei](https://www.btree.at/app/profile/#tab_company) neue Benützer anzulegen oder bestehende einzuladen.

Für User gibt es drei Ränge:

* Admin -> Hat vollen Zugang zu allen Funktionen der App.
* User -> Kann **keine** Rechte ändern, **keine** Benutzer anlegen und kann **nicht** die Imkerei löschen
* Worker / Arbeiter -> Kann nur im Quicktool arbeiten und auch keine Aufgaben löschen. Kann nicht in den Tabellen arbeiten, aber ansehen. Kann Aufgaben erledigen im Kalender aber keine Aufgaben verschieben. Hat keinen Zugriff auf die Statistik.
* Read-Only -> Dieser Benutzer kann nur die gesamten Daten ansehen, aber **keine Änderungen** durchführen. Hat auch keinen Zugriff auf die Statistik.

Außerdem besteht die Möglichkeit eine zweite Imkerei anzulegen oder den Namen der bestehenden zu ändern. Es kann keine Imkerei gelöscht werden wenn andere Benützer in der Imkerei sind oder es sich um die letzte eigene Imkerei handelt. (Anm. möchte man den Account löschen geht das unter [Optionen->Profil](https://www.btree.at/app/profile/) **Achtung die Daten können nicht wiederhergestellt werden!**)

Premium Membership gilt pro Imkerei und nicht pro User, dh. man braucht nur einmal Premium kaufen egal wie viele User in der Imkerei tätig sind. Legt man aber eine zweite Imkerei an und man möchte Premium Membership, muss man es zusätzlich für diese Imkerei Premium Zeit kaufen.

### Installation mit Chrome Webbrowser

Chrome Webbrowser unterstützt installation von Webapplikationen. Dadurch wird die Webapplikationen in einen Wrapper gesetzt und die App erscheint als eigenständige Software und kann über einen einfachen Doppelklick als eigenständige Software gestartet werden. Hierzu geht man auf die Einstellungen von Chrome "..." -> "weitere tools" -> "Verknüpfung erstellen".

<img src="./img//install1.png" alt="Install" loading="lazy">
<img src="./img//install2.png" alt="Install" loading="lazy">
<img src="./img//install3.png" alt="Install" loading="lazy">
<img src="./img//install4.png" alt="Install" loading="lazy">

### NFC Aufkleber

NFC Aufkleber sind eine einfache und schnelle Möglichkeit mit einem Handy (mit NFC support) auf Stock Details zuzugreifen. Du kannst leere und beschreibbare NFC Aufkleber zB über Amazon kaufen, diese sind recht günstig und kostet nur ein paar Cents. Danach brauchst du noch eine Handy App mit der du die NFC Aufkleber beschreiben kannst, diese sind gratis verfügbar im App Store (zB NFC Tools). Mit diesem Tool kannst du NFC beschreiben, löschen oder einlesen. Die beste Möglichkeit ist es direct auf die Stock Details zu verlinken mit dem NFC Aufkleber mit folgender URL Logik: https://www.btree.at/app/detail/hive/XXXX oder für Bienenstände: https://www.btree.at/app/detail/apiary/XXXX.

Danach kannst du die Aufkleber bei deinem Bienenstand anbringen und einfach mich aktivierten NFC über die Aufkleber drüber streichen (nur mit Android, iPhone liest moment leider keine NFC Tags automatisch).

<img src="./img//nfc_tools.jpg" alt="NFC tools" loading="lazy">
<img src="./img//nfc_tags.jpg" alt="NFC tags" loading="lazy">
