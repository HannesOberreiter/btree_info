---
title: "FAQs"
description: "Dokumentation und Hilfe zur Imkerei Software"
layout: "../../layouts/IndexLayout.astro"
lang: "de"
---

### Ich kann die App nicht im Apple iOS AppStore oder Google PlayStore finden

Die b.tree Imkerei-Applikation ist eine reine Web-Lösung und kann als PWA ([wikipedia.org/wiki/Progressive_Web_App](https://en.wikipedia.org/wiki/Progressive_Web_App)) installiert werden. Wir planen in naher Zukunft keine nativen Anwendungen für iOS, Android oder sonstige Plattform. Der beste Weg, die App zu nutzen, ist, die PWA auf Ihr Gerät zu laden (Firefox unterstützt diese Funktion derzeit nicht).

#### Installation PWA

- Chrome Computer & Android
  - Video Anleitung: [b.tree - Tutorial - PWA Android - Deutsch](https://youtu.be/x3vtW8X-agE)
  - Text Anleitung: [support.google.com/chrome/answer/9658361](https://support.google.com/chrome/answer/9658361)
- Apple iOS
  - Video Anleitung: [b.tree - Tutorial - PWA iOS - Deutsch](https://youtu.be/JMR0t6za7Ys)
  - Text Anleitung: [marlem-software.de/marlemblog/2022/02/04/](https://www.marlem-software.de/marlemblog/2022/02/04/progressive-web-apps-installieren-in-den-betriebssystemen-windows-android-ios-ubuntu-und-macos/#Progressive_Web-App_Installation_im_Betriebssystem_IOS)

### Aufgabe ist in der Tabelle nicht sichtbar

Ein Grund dafür könnte das Datum der ersten Wanderung des Bienenstocks sein. Das System verwendet die Informationen über die Wanderungen, um die Verbindung zwischen Bienenstöcken und Bienenständen herzustellen. Wenn Sie eine Aufgabe vor dem Datum der ersten Wanderung erstellen, wird sie nicht in der Aufgabentabelle angezeigt. Um dieses Problem zu beheben, müssen Sie das Wanderdatum auf ein Datum vor der Aufgabe ändern oder das Datum der Aufgabe nach der Wanderung festlegen.

### Meine Fütterung, Behandlungsart ... sind nicht in der Auswahl verfügbar

Unser System ist so aufgebaut, dass individuelle Einstellungen möglich sind. Sie können Ihre eigenen Typen in den Optionen [/setting/option](https://app.btree.at/setting/option/checkup_types) definieren. Die Reihenfolge des Auswahlmenüs ist alphabetisch bzw. der favorisierte Typ steht immer an erster Stelle. Wenn Sie einen Typ nicht mehr benötigen, können Sie den Modus auf inaktiv setzen. Vorsicht, wenn Sie einen Typ löschen, den Sie vorher benutzt haben, können Statistiken und Tabellenwerte falsch sein oder fehlen. Deswegen empfehlen wir grundsetzlich Typen die nicht mehr gebraucht werden, zB eine Behandlungsmethode die nicht mehr eingesetzt wird, auf inaktiv zu setzen um die Datenintegrität zu gewährleisten.

### Ich vermisse ein Feld / Feature für meine Aufgabe

In den Optionen [/setting/field](https://app.btree.at/setting/field) können Sie verschiedene Felder für Ihre Aufgaben aktivieren, zum Beispiel Königinnen Bewertung für Kontrollen. Wenn Sie dennoch noch ein Feld vermissen, können Sie uns eine E-Mail mit Ihrem Vorschlag schreiben. Wir führen eine Benutzer-Wunschliste und wenn genügend Benutzer eine fehlende Funktion angefragt haben, werden wir versuchen, sie zu implementieren. Wir versuchen jedoch, die Anzahl der angebotenen Felder zu minimieren, da wir der Meinung sind, dass Informationen, die in der Statistik nicht wichtig sind, auch einfach in das Notizfeld geschrieben werden können, bzw. hat sich gezeigt, dass viele Felder mit der Zeit in einer größeren Imkerei obsolet werden.

### Die Spracherkennung funktioniert nicht

Die Spracherkennung ist abhängig von der verfügbaren Web-API und funktioniert bisher nur in den Browsern Google Chrome und Microsoft Edge, außerdem benötigt sie eine aktive Internetverbindung. Der Button zur Spracherkennung wird nur angezeigt, bei Systemen die dieses auch unterstützen. Die Spracherkennung selbst ist nur aktiv, wenn Sie auf den Button klicken, ein kontinuierliches Abhören ist derzeit nicht möglich.

Die aktuelle Browserunterstützung finden Sie unter folgendem Link: [caniuse.com/mdn-api_speechrecognitionevent](https://caniuse.com/mdn-api_speechrecognitionevent)

Anmerkung: Safari wurde zur Zeit ausgelassen, da gewisse Funktionen nur mit Fehlern funktionieren und die Spracherkennung um einiges schlechter Funktioniert.

### NFC funktioniert nicht

Wie bei der Spracherkennung ist auch NFC durch die Browserunterstützung eingeschränkt. Sie werden eine Warnung erhalten, wenn Sie versuchen, NFC zu aktivieren, wenn Ihr Browser dies nicht unterstützt.

Die aktuelle Browserunterstützung finden Sie unter folgendem Link: [caniuse.com/webnfc](https://caniuse.com/webnfc)

Alternativ kann man auch eine beliebige NFC-App aus dem Google PlayStore oder iOS AppStore verwenden. Zumindest Android sollte NFCs auch ohne geöffnete App lesen, wenn Sie die Option aktivieren. Die NFC-Tags selbst können Sie in vielen Online-Shop kaufen und sind im allgemeinen sehr günstig.

### So verwenden Sie NFC oder den QR-Scanner

Sowohl der NFC- als auch der QR-Code-Scanner sollen Ihnen dabei helfen, schneller im Feld am Bienenstand zu arbeiten. Die einfachste Funktion ist eine Weiterleitung zu der Seite, die Sie auf dem NFC-Tag oder QR-Code gespeichert haben. Die mehr fortgeschrittene Anwendung ist die Verwendung der Bienenstock-URL, wenn Sie z. B. die URL zu einem bestimmten Stock auf dem Tag speichern, z. B. `https://beta.btree.at/detail/hive/[hive_id]`, und sich auf einer Seite mit einem Stock-Dropdown/Auswahl befinden, z. B. im QuickTool oder beim Erstellen einer neuen Wanderung. Wählt das System nach dem scannen automatisch den Bienenstock in der Auswahlliste aus. Ein konkretes Beispiel: Sie gehen zu Ihrem Bienenstand "A" und laden zwanzig Bienenstöcke auf Ihren Anhänger, um diese zum Bienenstand "B" zu transportieren. Nach dem Beladen öffnen man die b.tree Imkerei App, wählt eine neue Wanderung [/new/movement](https://app.btree.at/new/movement) und scannt dann die zwanzig Bienenstöcke auf dem Anhänger mit dem NFC-Tag oder mit dem QR-Code. Dadurch sind alle 20 Stöcke ausgewählt und man muss nur noch abspeichern. Besonders bei sehr vielen Bienenstöcken ist die Auswahl um einiges schneller als die händische Selektion.

#### NFC exportieren

Sie können NFCs mit einem Tool eines Drittanbieters beschreiben oder die integrierte Schaltfläche "Teilen" verwenden. Sie finden die Schaltfläche in der Fußzeile der App, wo die aktuelle URL steht. Wenn Sie auf den Text klicken, öffnet sich ein Dialog, mit dem Sie auf einen NFC-Tag schreiben können.

Video Erklärung: [b.tree - Tutorial - NFC - Deutsch](https://youtu.be/2XR1nlOw6xI)

#### QR-Code exportieren

In der Stock-Tabelle [/table/hive](https://app.btree.at/table/hive) wählen Sie die Stöcke aus, für die Sie einen QR-Code generieren möchten. Dann klicken Sie auf die Dropdown-Schaltfläche und wählen "QR drucken". Es öffnet sich ein Dialog, in dem QR-Codes für jeden ausgewählten Bienenstock erzeugt wird. Mit einer zusätzlichen Schaltfläche können Sie ein separates Fenster zum Drucken öffnen. Alternativ können Sie ein QR-Code-Generierungstool eines Drittanbieters verwenden und einfach QR-Codes auf der Grundlage der URLs generieren.

Video Erklärung: [b.tree - Tutorial - QR Code - Deutsch](https://youtu.be/ps_aYB9u778)

### Premium-Mitgliedschaft

Auf der Seite [/premium](https://app.btree.at/premium) können Sie Ihre Premium-Mitgliedschaft gegen Bezahlung verlängern. Wenn Sie den Premium-Zugang kaufen, wird Ihr Konto um 365 Tage Premium-Zeit erweitert. Wenn Sie bereits ein Guthaben in Premium-Zeit haben, wird die neue Zeit zu Ihren laufenden Guthaben hinzugefügt. Ansonsten wird das aktuelle Datum verwendet. Wenn Sie keine Premium-Tage mehr haben, können Sie die Anwendung immer noch nutzen, aber Sie können die Premium-Funktionen nicht mehr nutzen und befinden sich wieder innerhalb des Limits für Bienenstöcke und Stände. Auf diese Weise hoffen wir, Ihnen ein faires System ohne monatliche oder jährliche automatische Zahlungen zu bieten, und Sie behalten die volle Kontrolle darüber, wann Sie zahlen möchten. Sollte die Premium Zeit nach der Bezahlung nicht automatisch angerechnet werden, versuchen sie einmal auszuloggen und wieder einzusteigen in die App. Ansonsten melden sie sich bitte bei uns office📧btree.at

### Gibt es eine Offline-Version?

Nein, b.tree funktioniert nur mit einer aktiven Internetverbindung. Eine Offline-Version ist nicht geplant.

### Wo werden meine Daten gespeichert und kann ich sie lokal speichern?

Der Serverstandort ist in Deutschland und alle Daten werden in einer Online-Speicherdatenbank gespeichert. Verschlüsselte Backups werden auf Amazon Cloud Storage (Standort Deutschland) gespeichert. Sie können eine Kopie Ihrer Daten im csv-Format herunterladen [/setting/company](https://app.btree.at/setting/company), wir empfehlen Ihnen, mindestens einmal im Jahr eine Kopie zur sicheren Aufbewahrung herunterzuladen. In den Tabellenansichten ist es auch möglich, die Daten im csv-Format zu exportieren.

### Wie lösche ich mein Konto und entferne alle meine Daten?

Wenn Sie einer von vielen Benutzern in einem Imkereibetrieb sind, können Sie Ihr Profil und Ihre Benutzerdaten in den Profileinstellungen [/setting/profile](https://app.btree.at/setting/profile) löschen. Wenn Sie der einzige Benutzer in einem Betrieb sind, werden alle Daten des Betriebs, z.B. Bienenvölker, Standort des Bienenstocks, ebenfalls gelöscht. Wenn Sie nur einen Ihrer Betriebe löschen möchten, können Sie diesen in den Betriebseinstellungen [/setting/company](https://app.btree.at/setting/company) löschen. Dies ist nur möglich, wenn Sie der letzte Benutzer in diesem Betrieb sind. In der Hauptsicherung der Datenbank werden die Daten nach 3 Monaten entfernt (automatische Löschung von Sicherungen, die älter als 3 Monate sind). Eventuelle Rechnungen oder Mail Verkehr mit \*@btree.at werden nach 7 Jahren gelöscht. Wenn Sie uns eine E-Mail schreiben, um Ihren Account zu löschen, legen Sie bitte einen Nachweis vor, dass der Account Ihnen gehört (z.B. Imkerei Namen).

### Die Bienenstockzählung ist falsch

Der Hauptgrund, warum Ihre Zählung falsch sein kann, ist die Verwendung von Gruppenstöcken, da diese keine historischen Daten haben. Daher ist die Anzahl der Gruppenstöcken nur in der Bienenstand Zählung sichtbar und spiegelt immer den aktuellen Wert wider. Ein weiterer Grund für eine falsche Anzahl ist, dass ein gelöschtes Bienenvolk nicht mehr in der Statistik auftaucht. Dies gilt für alle Statistiken, daher sollten Sie Ihre Völker inaktiv setzen, wenn diese abgeschwärmt sind oder verkauft wurden, und diese nicht löschen, da dann auch alle damit verbundenen Daten gelöscht werden!

### Was bedeuten die Zahlen im Navigations Menu

Die Zahlen bei Aufgaben und ToDo's kennzeichnet die Anzahl der noch offenen / nicht erledigten Aufgaben. Bei Stand, Stock und Königin stehen die Zahlen für die jeweilige Anzahl. Bei Stock ist die Zahl inklusive möglicher Gruppenstöcke. Die Zahlen werden alle 5 Minuten aktualisiert, dh. Änderungen sind sind sofort erkennbar.

### Tutorial Videos

Auf YouTube findet ihr eine Playlist mit Tutorial Videos: [b.tree | Imkerei App Tutorial | Deutsch](https://www.youtube.com/playlist?list=PLtd4fnhQMyZ0dz8fAT5rPUw4wnkznXXSX)
