---
title: Other
description: "Dokumentation und Hilfe zur Imkerei Software"
layout: "../../layouts/IndexLayout.astro"
lang: "de"
---

### Tastaturkurzbefehle

- Allgemein
  - (h) Öffnet das Hilfefenster
  - (s) Aktiviert die Spracherkennung
- Kalender
  - (← Pfeil nach links) Voriger Monat / Woche
  - (→ Pfeil nach rechts) Nächster Monat / nächste Woche
- Tabellen
  - (← Pfeil nach links) Vorherige Tabellen Seite
  - (→ Pfeil nach rechts) Nächste Tabellen Seite
  - (↑ Pfeil nach oben) Erste Tabellen Seite
  - (↓ Pfeil nach unten) Letzte Tabellen Seite

### Passwort ändern

Auf der Profilseite Registerkarte Anmeldedaten können Sie Ihr Passwort ändern [/setting/profile/credentials](https://app.btree.at/setting/profile/credentials). Aus Sicherheitsgründen müssen Sie auch Ihr altes Passwort angeben. Auf der Registerkarte Benutzer können Sie die Sprache ändern, Profileinstellungen vornehmen und Ihr Konto löschen [/setting/profile/user](https://app.btree.at/setting/profile/user) (keine Wiederherstellung möglich!).

### Aufgelöster Filemanager

In unserer Vorgängerversion 5.x.x war es möglich, Dateien auf unseren Server hochzuladen. Wir haben diesen Dienst eingestellt, die einzige Möglichkeit ist die Nutzung von Dropbox als Drittanbieterdienst, der mit unserer Imkerei-App verbunden werden kann.

### Dropbox

Eine Video Erklärung findet man auf YouTube: [b.tree - Tutorial - Dropbox als Datenverwaltung - Deutsch](https://youtu.be/1-GgEi5Pjek)

Um Fotos oder Dateien zu Aufgaben etc. hinzuzufügen, können Sie ein Dropbox-Konto verbinden [/setting/dropbox](https://app.btree.at/setting/dropbox). Dropbox ist zwar nicht kostenlos, bietet aber einen einfach zu bedienenden Cloud-Dienst für die Dateiverwaltung. Wenn die Verbindung zu Ihrem Dropbox-Konto authentifiziert ist, wird ein spezieller Ordner (b.tree - Beekeeping) in Ihrem Dropbox-Konto erstellt. Der Zugriff auf diesen Ordner ist dann für Sie und **alle Ihre Benutzer auf demselben Imkereibetrieb** verfügbar. Um den Zugriff zu entfernen, können Sie die entsprechende Schaltfläche auf der Einstellungsseite verwenden oder [dropbox.com/account/connected_apps](https://www.dropbox.com/account/connected_apps) besuchen.

Nachdem Sie Ihr Dropbox-Konto verbunden haben, können Sie Ihre Dateien und Ordner auf der Einstellungsseite [/setting/dropbox](https://app.btree.at/setting/dropbox) verwalten. Um auf den Dropbox-Ordner zuzugreifen oder neue Bilder und Dateien hochzuladen, wenn Sie neue Aufgaben erstellen, aktivieren Sie die Schaltfläche "Link" in den Feldeinstellungen [/setting/field](https://app.btree.at/setting/field). Beim Speichern eines Bildes oder einer Datei zu Ihrer Aufgabe wird eine ID mitgespeichert und Sie können darauf klicken, um den Inhalt in einem kleinen Fenster anzuzeigen.

### Kalender

Auf dem Haupt-Seite soll ein Kalender einen guten Überblick über die aktuellen, vergangenen und zukünftigen Aufgaben geben [/](https://app.btree.at/). Hier können Sie auch Aufgaben per Drag and Drop verschieben, wenn Sie schnell ein Datum ändern wollen oder eine Aufgabe anklicken, um mehr Details zu erfahren. Bei Königinnenzucht-Serien bekommen Sie alle Schritte entsprechend der Aufzuchtmethode aufgelistet. ToDo's sind im Kalendar auch sichtbar und Sie können neue erstellen, indem Sie auf das gleiche Datum doppelklicken.

Wenn Sie eine eigene Bienenstockwaage haben, die mit unserer API verbunden ist, wird der tägliche Gewichtsdurchschnitt in einem separaten Kalender [/calendar_scale](https://app.btree.at/calendar_scale) angezeigt.

### Suche / Schnellzugriff

Wenn Sie in der oberen Menüleiste auf das Lupensymbol klicken, können Sie schnell auf einzelne Bienenstöcke oder Stände zugreifen. Sie werden auf die jeweilige Detailübersicht des Bienenstandes oder Bienenstocks weitergeleitet, was ein guter Ausgangspunkt für die Suche nach schnellen Informationen ist.

### Zuchtserien

Da Zuchtmethoden sich unterscheiden zwischen Imkerei Betrieben, bietet b.tree die Möglichkeit diese selber zu definieren. Das Anlegen dieser Zuchtmethoden [/setting/rearing](https://app.btree.at/setting/rearing) erfordert etwas Zeit und ist in diesem Video erklärt: [b.tree - Tutorial - Zuchtmethode und Zuchtserie - Deutsch](https://youtu.be/R47P79QtQag). Ein Hinweis dazu, die Wartezeit bei den Zuchtschritten bezieht sich immer auf die Zeit in Stunden zu dem vorhergegangen Schritt.

Nachdem die Zuchtmethoden definiert sind können Zuchtserien einfach über folgendes Formular hinzugefügt werden: [/new/rearing](https://app.btree.at/new/rearing). Diese Zuchtserien werden auch im Kalender dargestellt und können als iCal abonniert werden. Achtung ein Löschen von Zuchtserien oder Methoden die bereits verwendet wurden führt zur unwiderruflichen Löschung und können nicht wiederhergestellt werden.

### Spracherkennungsbefehle

Dieses Feature funktioniert noch nicht in allen Browsern, bisher funktioniert es nur mit Chrome und Microsoft Edge. Die Spracherkennung soll Ihnen helfen, schneller und einfacher mit der App zu arbeiten. Folgende Befehle sind integriert:

- Dashboard, Kalender: Weiterleitung zur Startseite mit Kalender
- Fütterung: Weiterleitung zum Quicktool mit Fütterung als Aufgabe ausgewählt
- Behandlung: Weiterleitung zum Quicktool mit Behandlung als Aufgabe ausgewählt
- Ernte: Weiterleitung zu Quicktool mit Ernte als Aufgabe ausgewählt
- Kontrollieren: Weiterleitung zu Quicktool mit Kontrolle als Aufgabe ausgewählt
- Name des Bienenstandes oder Bienenstocks: Weiterleitung zur Übersichtsseite des Bienenstandes oder des Bienenstocks

### Mehrere Benutzer / Imker

Wenn Sie einen weiteren Benutzer zu Ihrem Imkereibetrieb hinzufügen möchten, besuchen Sie die Seite mit den Unternehmenseinstellungen [/setting/company](https://app.btree.at/setting/company). Wenn die E-Mail Adresse noch nicht bei uns registriert ist, wird automatisch ein Konto erstellt und eine E-Mail an den neuen Benutzer geschickt, in der er aufgefordert wird, sein Passwort zurückzusetzen, da wir keine Passwörter per E-Mail verschicken.

Eine Video Erklärung zum Thema Imkereien und User findet ihr auf YouTube: [b.tree - Tutorial - Betriebe und Benutzer Management - Deutsch](https://youtu.be/SEmuh3b8UXk)

Für Benutzer gibt es drei Ränge, die durch Klicken auf das Rangsymbol geändert werden können. Um Benutzer zu entfernen, klicken Sie auf das Symbol "Benutzer entfernen".

- Admin: Kann alles hinzufügen, ändern und löschen und Benutzer hinzufügen oder entfernen.
- User: Kann keine Bienenstöcke löschen, den API-Zugang nicht ändern und die Benutzer nicht ändern.
- Read-Only: Dieser Benutzer kann sich die Daten nur ansehen, aber keine Änderungen vornehmen.

Hinweis: Die Premium-Mitgliedschaft gilt pro Unternehmen und nicht pro Benutzer, d.h. Sie müssen nur einmal Premium bezahlen, egal wie viele Benutzer in Ihrer Imkerei aktiv sind.
