# FlowDesk Roadmap

Diese Roadmap beschreibt die geplante Entwicklung von FlowDesk als oeffentliches Portfolio-Projekt. Der Fokus liegt auf einem modularen Laravel-Monolithen, sauberer Architektur und einer professionellen SaaS-Oberflaeche.

## Phase 1: Foundation

Ziel: Technisches Fundament und sichtbare Produktbasis schaffen.

Status: in Arbeit

Aufgaben:

- Laravel, Breeze, React, Inertia und TypeScript einrichten
- modernes deutsches AppShell-Layout erstellen
- statisches Dashboard mit Demo-Inhalten erstellen
- README und Roadmap professionalisieren
- Breeze-Auth- und Profilseiten eindeutschen
- wiederverwendbare UI-Basiskomponenten vorbereiten
- Laravel Pint konfigurieren
- erste GitHub Actions fuer Build und Tests vorbereiten
- Docker bewusst spaeter pruefen

Ergebnis:

- Die Anwendung wirkt nicht mehr wie ein Laravel-Standardprojekt.
- GitHub-Besucher erkennen Ziel, Stack und geplante Architektur.
- Die Basis fuer fachliche Module ist vorbereitet.

## Phase 2: Organizations und Identity

Ziel: Mandantenfaehigkeit und Benutzerverwaltung vorbereiten.

Geplante Aufgaben:

- `Organization` Model, Migration und Factory erstellen
- `organization_id` am User einfuehren
- Benutzer einer Organisation zuordnen
- einfache Organisationsverwaltung fuer Admins erstellen
- Policies fuer organisationsgebundenen Zugriff vorbereiten
- Seed-Daten fuer Demo-Organisation erstellen
- Einladungsprozess konzeptionell vorbereiten

Wichtige Entscheidungen:

- Jede fachliche Tabelle erhaelt perspektivisch `organization_id`.
- Zugriffe duerfen nie organisationsuebergreifend erfolgen.
- Policies bleiben auch bei Rollen/Permissions zentral.

## Phase 3: Process Templates

Ziel: Prozessvorlagen modellieren und versionierbar machen.

Geplante Aufgaben:

- `ProcessTemplate` erstellen
- `ProcessTemplateVersion` erstellen
- `ProcessStepTemplate` erstellen
- Status-Enums fuer Vorlagen einfuehren
- Draft- und Publish-Flow vorbereiten
- Prozessschritte fuer Form, Task, Approval und Notification modellieren
- Tests fuer unberechtigte Veroeffentlichung schreiben

Wichtige Entscheidungen:

- Laufende Prozesse basieren immer auf einer veroeffentlichten Version.
- Spaetere Aenderungen an Vorlagen veraendern keine laufenden Prozesse.

## Phase 4: Process Instances und Tasks

Ziel: Prozesse starten und Schrittfolgen bearbeiten.

Geplante Aufgaben:

- `ProcessInstance` erstellen
- `ProcessStep` erstellen
- `Task` erstellen
- Prozess aus veroeffentlichter Vorlage starten
- ersten Schritt automatisch aktivieren
- nach Abschluss eines Schritts den naechsten Schritt aktivieren
- Statusuebergaenge zentral regeln
- Transaktionen fuer Prozessstart und Schrittabschluss verwenden

Wichtige Tests:

- Ein Benutzer kann einen Prozess starten.
- Nach Abschluss eines Schritts wird der naechste Schritt aktiviert.
- Abgeschlossene Prozesse koennen nicht unzulaessig veraendert werden.
- Benutzer unterschiedlicher Organisationen koennen nicht auf fremde Daten zugreifen.

## Phase 5: Approvals und Audit

Ziel: Freigaben, Kommentare und Nachvollziehbarkeit umsetzen.

Geplante Aufgaben:

- `Approval` erstellen
- `Comment` erstellen
- `ActivityLog` erstellen
- Genehmigen und Ablehnen implementieren
- Ablehnung korrekt auf Prozessstatus abbilden
- Activity-Log bei fachlichen Aktionen schreiben
- Policies fuer Approver-Zugriffe erstellen

Wichtige Tests:

- Nur der zustaendige Approver kann eine Freigabe bearbeiten.
- Eine Ablehnung wirkt sich korrekt auf den Prozess aus.
- Alle relevanten Aktionen erzeugen nachvollziehbare Aktivitaetseintraege.

## Phase 6: Notifications, Documents und Suche

Ziel: Prozesse im Arbeitsalltag nutzbar machen.

Geplante Aufgaben:

- Laravel Notifications fuer relevante Ereignisse einfuehren
- E-Mail- und In-App-Benachrichtigungen vorbereiten
- Dokumentenuploads modellieren
- spaeter Storage-Abstraktion fuer lokale Dateien und MinIO vorbereiten
- Such- und Filterfunktionen fuer Prozesse und Aufgaben erstellen
- Dashboard mit echten Daten verbinden

## Phase 7: Reporting und Demo-Polish

Ziel: Portfolio-Wirkung verbessern und Demo abrunden.

Geplante Aufgaben:

- Demo-Daten fuer Softwarezugangsprozess erstellen
- Demo-Zugang vorbereiten
- Dashboard-KPIs mit echten Daten fuellen
- Prozessdetailseite polishen
- README mit Screenshots ergaenzen
- GitHub Actions stabilisieren
- optional Playwright E2E-Tests einfuehren

## Priorisierung

| Prioritaet | Themen |
| --- | --- |
| Must-have | Auth, AppShell, Organisationen, Prozessvorlagen, Prozessinstanzen, Aufgaben, Freigaben, Activity Log |
| Should-have | Rollen/Permissions, Benachrichtigungen, Kommentare, Suche, Demo-Daten |
| Could-have | Dokumente, Reporting, Kalender-/Mail-Integrationen, erweiterte Filter |
| Nice-to-have | Playwright E2E, Docker-Setup, Redis, MinIO, KI-gestuetzte Vorschlaege |

## Nichtziele fuer den Start

- keine vollstaendige HR-Suite
- keine produktionsreife Lohnabrechnung
- keine komplexe BPMN-Engine
- keine mandantenuebergreifenden Admin-Funktionen
- keine Docker-Priorisierung, bis das lokale Setup stabil ist

## Architektur-Checkliste

- Controller bleiben schlank.
- Validierung liegt in Form Requests.
- Fachliche Use Cases liegen in Actions oder Services.
- Policies sichern fachliche Zugriffe ab.
- Statuswerte werden ueber Enums modelliert.
- Kritische Aenderungen laufen in Datenbanktransaktionen.
- Ereignisse werden ueber Events und Listener abgebildet.
- Nebenlaeufige Arbeit wird ueber Jobs vorbereitet.
- Jede fachliche Aktion ist auditierbar.
- Organisationsgrenzen werden konsequent beachtet.
