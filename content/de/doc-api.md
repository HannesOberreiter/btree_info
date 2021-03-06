---
title: API
description: 'Dokumentation und Hilfe zur Imkerei Software'
position: 26
category: Dokumentation
---
# API

## ICAL Kalender API

Premium User können die Kalender Daten über einen ICAL Link in den eigenen Kalender importieren. Im [Optionen->Profil](https://www.btree.at/app/profile/) muss der API Schlüssel aktiviert werden und die ICAL Links werden danach angezeigt.

### Google Kalender

Unter weitere Kalender kann man die gegebene ICAL URL über den Link "Über URL Hinzufügen" eintragen. Danach erscheint der Kalender im Google Kalender. Google Updated diese externen Kalender nur alle paar Stunden, dieser Parameter kann in der gratis Version von Google Kalender nicht geändert werden.

<img src="/img/ical_google.jpg" alt="Google Import" loading="lazy" />

### Mac/Apple Kalender

Unter "Ablage" -> "Neues Kalenderabonnement" kann die ICAL URL hinzugefügt werden. Dort kann man auch Einstellen wie oft der Kalender neu geladen werden soll. Um unnötige Last auf den Server zu vermeiden, bitte je nach Art des Kalenders einen entsprechenden Interval zu wählen. (Beispiel Königinnen Serie nur auf täglich setzen)

<img src="/img/ical_mac.jpg" alt="Mac Import" loading="lazy" />

## Stockwaagen API

Als erstes musst du im Profil den API Schlüssel aktivieren. Damit kannst du bis zu 5 verschiedene Waagen an unsere API senden. Es ist möglich jede Stunde neue Daten pro Waage an den Webservice zu senden.

[Github Projekt mit Arduino Sketches](https://github.com/HannesOberreiter/bScale)

**Adresse für API Meldung:** [www.btree.at/app/api/ext/scale.php](https://www.btree.at/app/api/ext/scale.php)

**Fixe Header Parameter**

* X_API_KEY   - "XXXXXX" (API Schlüssel, kann man im Profil generieren) (Alternative als POST/GET -> HTTP_X_API = XXXXX)

**Fixe POST/GET Parameter**

* ident   - "Test Scale" (Der Name der einzelnen Waage, Beispiel "Waage1", "Waage2". Existiert der Name noch nicht wird automatisch eine neue Waage im System erstellt)
* action  - "CREATE" (benütze "CREATE_DEMO" um nur eine Antwort vom Server zu erhalten, ohne die Daten zu speichern, sozusagen ein Testmodus)
* timezone - "Europe/Vienna" (Zeitzone, Format und Beschreibung findet man im folgenden Link http://php.net/manual/en/timezones.php)

**Waage POST/GET PARAMETER**

* weight  - Gewicht (xx.xx)
* temp1   - Temperatur (xx.xx)
* temp2   - Zweite Temperatur (xx.xx)
* hum     - Luftfeuchtigkeit (xx.xx)
* rain    - Regen (xx.xx)
* note    - Zusätzliche Notiz (max. 300 Zeichen)

**Alternativ mit SMSsync**

* Ändere "secret" zu "X_API_KEY"
* Ändere "message" zu "sms"
* "sms" Aufbau muss wie folgt lauten, ohne Leerzeichen = "action ; timezone ; ident ; weight ; temp1 ; temp2 ; hum ; rain ; note"
