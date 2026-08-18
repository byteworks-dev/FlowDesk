# FlowDesk

FlowDesk ist ein oeffentliches Portfolio-Projekt fuer eine moderne Plattform zur Digitalisierung interner Unternehmensprozesse. Das Projekt zeigt Full-Stack-Entwicklung mit Laravel, React, Inertia.js, TypeScript und Tailwind CSS in einem modular aufgebauten Laravel-Monolithen.

Ziel ist nicht, ein einzelnes Fachsystem nachzubauen. FlowDesk bildet wiederkehrende Unternehmensprozesse generisch als digitale Workflows ab, zum Beispiel Softwarezugangs-Antraege, Dokumentenfreigaben, Beschaffungsprozesse, Onboarding-Ablaeufe oder interne Aenderungsantraege.

## Projektstatus

FlowDesk befindet sich in einer fruehen Aufbauphase.

Aktuell vorhanden:

- Laravel-Anwendung mit Authentifizierung ueber Breeze
- React/Inertia/TypeScript-Frontend
- deutsches AppShell-Grundlayout mit Sidebar und Topbar
- statisches Dashboard mit Demo-Kennzahlen und Prozessvorschau
- lokale Entwicklung mit SQLite moeglich
- GitHub-Repository und SSH-Remote eingerichtet

Noch nicht vorhanden:

- echte Prozess-, Aufgaben- oder Freigabelogik
- Organisations- und Rollenmodell
- PostgreSQL-/Docker-Setup
- CI/CD
- fachliche Backend-Module

## Produktidee

FlowDesk soll Unternehmen dabei unterstuetzen, interne Prozesse transparent und nachvollziehbar zu steuern.

Typische Prozesse koennen spaeter sein:

- Softwarezugang beantragen
- Dokumente freigeben
- Arbeitsmittel beschaffen
- interne Aenderungsantraege stellen
- Onboarding-Prozesse durchfuehren
- Aufgaben und Freigaben verwalten

Ein Prozess kann perspektivisch aus mehreren Schritten bestehen:

1. Formular ausfuellen
2. Freigabe durch verantwortliche Person
3. Bearbeitung durch zustaendige Abteilung
4. Abschluss oder Bestaetigung

## Demo-Prozess

Der zentrale Demo-Prozess ist ein Antrag fuer einen Softwarezugang.

Ablauf:

1. Ein Mitarbeitender beantragt eine Software.
2. Software, Begruendung, benoetigtes Datum und Kostenstelle werden erfasst.
3. Eine Fuehrungskraft genehmigt oder lehnt den Antrag ab.
4. Die IT erhaelt eine Aufgabe zur Einrichtung.
5. Der Mitarbeitende bestaetigt, dass der Zugang funktioniert.
6. Alle Aktionen werden im Aktivitaetsverlauf dokumentiert.

## Tech-Stack

Backend:

- PHP 8.3+
- Laravel 13
- Laravel Sanctum
- Laravel Queues, Scheduler und Notifications geplant
- PostgreSQL geplant
- Pest oder PHPUnit fuer Tests
- Laravel Pint fuer Code Style
- Larastan/PHPStan geplant

Frontend:

- React 18
- Inertia.js 2
- TypeScript
- Tailwind CSS
- wiederverwendbare UI-Komponenten

Infrastruktur geplant:

- Docker Compose
- PostgreSQL
- Redis
- Mailpit
- GitHub Actions
- optional MinIO fuer Dokumentenuploads

## Architekturziele

FlowDesk wird als modularer Laravel-Monolith aufgebaut.

Wichtige Prinzipien:

- keine Geschaeftslogik vollstaendig in Controllern
- Form Requests fuer Validierung
- Policies fuer Zugriffskontrolle
- Actions oder Services fuer Anwendungsfaelle
- Events und Listener fuer Seiteneffekte
- Jobs fuer asynchrone Verarbeitung
- Enums fuer Statuswerte
- Datenbanktransaktionen bei fachlich zusammenhaengenden Aenderungen
- klare fachliche Module
- Mandantenfaehigkeit ueber `organization_id`

Geplante Module:

- Identity
- Organizations
- Processes
- Tasks
- Approvals
- Documents
- Notifications
- Audit

## Geplante Kerndatenmodelle

- Organization
- User
- Team
- Role
- Permission
- ProcessTemplate
- ProcessTemplateVersion
- ProcessStepTemplate
- ProcessInstance
- ProcessStep
- Task
- Approval
- Comment
- Document
- ActivityLog
- Notification

Prozessvorlagen und konkrete Prozessinstanzen werden getrennt behandelt. Veroeffentlichte Prozessvorlagen sollen versioniert werden, damit laufende Prozesse nicht durch spaetere Aenderungen an Vorlagen veraendert werden.

## Rollenmodell

Geplante Rollen:

| Rolle | Verantwortung |
| --- | --- |
| Administrator | Organisation, Benutzer, Rollen und Prozessvorlagen verwalten |
| Process Manager | Prozesse starten, verwalten und auswerten |
| Approver | Zugewiesene Freigaben bearbeiten |
| Employee | Eigene Prozesse starten, Aufgaben bearbeiten und eigene Prozesse einsehen |

Rollen und Permissions sollen spaeter mit `spatie/laravel-permission` umgesetzt werden. Policies bleiben trotzdem zentral fuer fachliche Zugriffskontrolle.

## MVP-Fokus

Der MVP konzentriert sich auf nachvollziehbare interne Workflows statt auf maximale Funktionsbreite.

Geplante MVP-Funktionen:

- Authentifizierung
- Organisationsverwaltung
- Benutzerverwaltung und Einladungen
- Rollen und Berechtigungen
- Prozessvorlagen erstellen
- Prozessschritte definieren
- Prozessvorlagen veroeffentlichen
- Prozesse starten
- Aufgaben bearbeiten
- Freigaben genehmigen oder ablehnen
- Kommentare hinterlassen
- Aktivitaetsverlauf anzeigen
- Benachrichtigungen vorbereiten
- Dashboard mit offenen Aufgaben und aktiven Prozessen
- Demo-Daten und Demo-Zugang

## Entwicklungsroadmap

Die detaillierte Roadmap liegt unter [`docs/roadmap.md`](docs/roadmap.md).

Kurzuebersicht:

| Phase | Ziel |
| --- | --- |
| Phase 1 | Projektfundament, Layout, Dokumentation und Codequalitaet |
| Phase 2 | Organisationen, Benutzer und Rollen |
| Phase 3 | Prozessvorlagen und Versionierung |
| Phase 4 | Prozessinstanzen, Schritte und Aufgaben |
| Phase 5 | Freigaben, Kommentare und Aktivitaetsverlauf |
| Phase 6 | Benachrichtigungen, Dokumente und Suche |
| Phase 7 | Reporting, Demo-Daten und Portfolio-Polish |

## Lokale Entwicklung

Voraussetzungen:

- PHP 8.3+
- Composer
- Node.js 22 LTS
- npm
- SQLite fuer lokale Entwicklung

Installation:

```bash
composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan migrate
```

Entwicklungsserver starten:

```bash
php artisan serve
```

In einem zweiten Terminal:

```bash
npm run dev
```

Anwendung oeffnen:

```text
http://127.0.0.1:8000
```

Build erstellen:

```bash
npm run build
```

Tests ausfuehren:

```bash
php artisan test
```

## Qualitaetsziele

FlowDesk soll nicht nur funktional, sondern auch als professionelles Codebeispiel nachvollziehbar sein.

Geplante Qualitaetsmassnahmen:

- Feature- und Unit-Tests fuer zentrale Geschaeftslogik
- zentrale Statusuebergaenge mit Tests
- Laravel Pint fuer Formatierung
- PHPStan/Larastan fuer statische Analyse
- TypeScript strict mode
- GitHub Actions fuer CI
- klare Architekturentscheidungen in `docs/adr`

## Portfolio-Hinweis

Dieses Projekt dient als oeffentliches Portfolio-Projekt. Fachliche Konzepte sind bewusst abstrahiert und generisch modelliert. Es enthaelt keine privaten Daten, keine internen Unternehmensprozesse und keinen nicht-oeffentlichen Code aus anderen Projekten.

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz geplant.
