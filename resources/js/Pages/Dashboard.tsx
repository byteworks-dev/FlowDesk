import MetricCard from '@/Components/ui/MetricCard';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const metrics = [
    {
        label: 'Offene Aufgaben',
        value: '8',
        change: '3 erfordern heute eine Aktion',
        tone: 'blue' as const,
    },
    {
        label: 'Aktive Prozesse',
        value: '4',
        change: '2 warten auf Uebergabe an eine Abteilung',
        tone: 'violet' as const,
    },
    {
        label: 'Ausstehende Freigaben',
        value: '3',
        change: 'Durchschnittliche Antwortzeit: 1,8 Tage',
        tone: 'amber' as const,
    },
    {
        label: 'Diesen Monat abgeschlossen',
        value: '12',
        change: '18% mehr als im Vormonat',
        tone: 'emerald' as const,
    },
];

const activities = [
    'Softwarezugang wurde durch die Fuehrungskraft freigegeben',
    'IT-Aufgabe fuer die Einrichtung des Figma-Zugangs zugewiesen',
    'Dokumentenfreigabe als Version 1 veroeffentlicht',
    'Neuer Onboarding-Antrag fuer das Produktteam erstellt',
];

const openTasks = [
    {
        title: 'Softwarezugang pruefen',
        owner: 'Freigabe durch Fuehrungskraft',
        due: 'Heute faellig',
    },
    {
        title: 'Beschaffungsdetails fuer Laptop vorbereiten',
        owner: 'Office Operations',
        due: 'Morgen faellig',
    },
    {
        title: 'Funktion des neuen SaaS-Zugangs bestaetigen',
        owner: 'Bestaetigung durch Mitarbeitenden',
        due: 'Faellig am 22. Aug.',
    },
];

const processRequests = [
    {
        name: 'Antrag auf Softwarezugang',
        status: 'Freigabe ausstehend',
        progress: 'Schritt 2 von 5',
    },
    {
        name: 'Onboarding neuer Mitarbeitender',
        status: 'In Bearbeitung',
        progress: 'Schritt 4 von 7',
    },
    {
        name: 'Dokumentenfreigabe',
        status: 'Aufgabe bei Fachabteilung',
        progress: 'Schritt 3 von 4',
    },
];

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div className="space-y-8">
                <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/70">
                    <div className="relative px-6 py-8 sm:px-8 lg:px-10">
                        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-100 blur-3xl" />
                        <div className="absolute bottom-0 right-24 h-40 w-40 rounded-full bg-violet-100 blur-3xl" />

                        <div className="relative max-w-3xl">
                            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                                Workflow-Zentrale
                            </span>
                            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                                Interne Antraege, Freigaben und Aufgaben in einem fokussierten Arbeitsbereich steuern.
                            </h1>
                            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                                FlowDesk hilft Teams dabei, wiederkehrende Unternehmensprozesse als transparente digitale Workflows mit klaren Zustaendigkeiten und nachvollziehbarem Aktivitaetsverlauf abzubilden.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {metrics.map((metric) => (
                        <MetricCard key={metric.label} {...metric} />
                    ))}
                </section>

                <section className="grid gap-6 xl:grid-cols-[1fr_1.35fr]">
                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <h2 className="text-lg font-semibold text-slate-950">
                                    Letzte Aktivitaeten
                                </h2>
                                <p className="mt-1 text-sm text-slate-500">
                                    Aktuelle Ereignisse aus dem Demo-Arbeitsbereich.
                                </p>
                            </div>
                            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                                Live-Vorschau
                            </span>
                        </div>

                        <div className="mt-6 space-y-4">
                            {activities.map((activity, index) => (
                                <div key={activity} className="flex gap-3">
                                    <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-700">
                                        {index + 1}
                                    </span>
                                    <div>
                                        <p className="text-sm font-medium text-slate-900">
                                            {activity}
                                        </p>
                                        <p className="mt-1 text-xs text-slate-500">
                                            Demo-Ereignis fuer die Portfolio-Oberflaeche
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
                        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
                            <h2 className="text-lg font-semibold text-slate-950">
                                Meine offenen Aufgaben
                            </h2>
                            <div className="mt-5 space-y-3">
                                {openTasks.map((task) => (
                                    <div
                                        key={task.title}
                                        className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4"
                                    >
                                        <p className="text-sm font-semibold text-slate-950">
                                            {task.title}
                                        </p>
                                        <div className="mt-3 flex items-center justify-between gap-3 text-xs text-slate-500">
                                            <span>{task.owner}</span>
                                            <span className="font-semibold text-blue-700">
                                                {task.due}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
                            <h2 className="text-lg font-semibold text-slate-950">
                                Aktive Prozessantraege
                            </h2>
                            <div className="mt-5 space-y-3">
                                {processRequests.map((request) => (
                                    <div
                                        key={request.name}
                                        className="rounded-2xl border border-slate-200 p-4"
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <p className="text-sm font-semibold text-slate-950">
                                                    {request.name}
                                                </p>
                                                <p className="mt-1 text-xs text-slate-500">
                                                    {request.progress}
                                                </p>
                                            </div>
                                            <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
                                                {request.status}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </AuthenticatedLayout>
    );
}
