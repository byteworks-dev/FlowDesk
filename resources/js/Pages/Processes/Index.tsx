import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

type ProcessTemplate = {
    id: number;
    name: string;
    category: string;
    status: 'draft' | 'published' | 'archived';
    step_count: number;
    description: string | null;
    owner_team: string | null;
    published_at: string | null;
    updated_at: string;
};

type ProcessesIndexProps = {
    processTemplates: ProcessTemplate[];
};

const statusLabels: Record<ProcessTemplate['status'], string> = {
    draft: 'Entwurf',
    published: 'Veroeffentlicht',
    archived: 'Archiviert',
};

const statusClasses: Record<ProcessTemplate['status'], string> = {
    draft: 'bg-amber-50 text-amber-700 ring-amber-100',
    published: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
    archived: 'bg-slate-100 text-slate-600 ring-slate-200',
};

const formatDate = (date: string | null) => {
    if (!date) {
        return 'Noch nicht veroeffentlicht';
    }

    return new Intl.DateTimeFormat('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }).format(new Date(date));
};

export default function ProcessesIndex({
    processTemplates,
}: ProcessesIndexProps) {
    const publishedTemplates = processTemplates.filter(
        (template) => template.status === 'published',
    ).length;
    const draftTemplates = processTemplates.filter(
        (template) => template.status === 'draft',
    ).length;
    const averageSteps = processTemplates.length
        ? Math.round(
              processTemplates.reduce(
                  (sum, template) => sum + template.step_count,
                  0,
              ) / processTemplates.length,
          )
        : 0;

    const stats = [
        { label: 'Vorlagen gesamt', value: processTemplates.length },
        { label: 'Veroeffentlicht', value: publishedTemplates },
        { label: 'Entwuerfe', value: draftTemplates },
        { label: 'Schritte im Schnitt', value: averageSteps },
    ];

    return (
        <AuthenticatedLayout>
            <Head title="Prozesse" />

            <div className="space-y-6">
                <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/70">
                    <div className="relative px-6 py-8 sm:px-8 lg:px-10">
                        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-violet-100 blur-3xl" />
                        <div className="absolute bottom-0 right-28 h-40 w-40 rounded-full bg-blue-100 blur-3xl" />

                        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                            <div className="max-w-3xl">
                                <span className="inline-flex rounded-full border border-violet-100 bg-violet-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
                                    Prozessbibliothek
                                </span>
                                <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                                    Prozessvorlagen fuer wiederkehrende interne Ablaeufe.
                                </h1>
                                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                                    Diese Uebersicht zeigt erste echte Demo-Daten
                                    aus der Datenbank. Spaeter werden aus
                                    veroeffentlichten Vorlagen konkrete
                                    Prozessinstanzen gestartet.
                                </p>
                            </div>

                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                            >
                                Vorlage erstellen
                            </button>
                        </div>
                    </div>
                </section>

                <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70"
                        >
                            <p className="text-sm font-medium text-slate-500">
                                {stat.label}
                            </p>
                            <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                                {stat.value}
                            </p>
                        </div>
                    ))}
                </section>

                <section className="grid gap-5 xl:grid-cols-2">
                    {processTemplates.map((template) => (
                        <article
                            key={template.id}
                            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70 transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-slate-200/80"
                        >
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                                            {template.category}
                                        </span>
                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${statusClasses[template.status]}`}
                                        >
                                            {statusLabels[template.status]}
                                        </span>
                                    </div>
                                    <h2 className="mt-4 text-xl font-semibold text-slate-950">
                                        {template.name}
                                    </h2>
                                </div>

                                <div className="rounded-2xl bg-slate-50 px-4 py-3 text-center">
                                    <p className="text-2xl font-semibold text-slate-950">
                                        {template.step_count}
                                    </p>
                                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                        Schritte
                                    </p>
                                </div>
                            </div>

                            <p className="mt-4 min-h-12 text-sm leading-6 text-slate-600">
                                {template.description}
                            </p>

                            <div className="mt-6 grid gap-3 border-t border-slate-200 pt-4 text-sm text-slate-600 sm:grid-cols-2">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                        Verantwortliches Team
                                    </p>
                                    <p className="mt-1 font-medium text-slate-900">
                                        {template.owner_team ?? 'Nicht zugewiesen'}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                        Veroeffentlicht
                                    </p>
                                    <p className="mt-1 font-medium text-slate-900">
                                        {formatDate(template.published_at)}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>

                <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/70">
                    <div className="border-b border-slate-200 px-6 py-5 sm:px-8">
                        <h2 className="text-lg font-semibold text-slate-950">
                            Vorlagenuebersicht
                        </h2>
                        <p className="mt-1 text-sm text-slate-500">
                            Kompakte Sicht fuer Status, Zustaendigkeit und
                            spaetere Verwaltung von Prozessvorlagen.
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-slate-200">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 sm:px-8">
                                        Vorlage
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                        Kategorie
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                        Schritte
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                        Aktualisiert
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 bg-white">
                                {processTemplates.map((template) => (
                                    <tr
                                        key={template.id}
                                        className="transition hover:bg-slate-50/80"
                                    >
                                        <td className="px-6 py-4 sm:px-8">
                                            <p className="whitespace-nowrap text-sm font-semibold text-slate-950">
                                                {template.name}
                                            </p>
                                            <p className="mt-1 whitespace-nowrap text-sm text-slate-500">
                                                {template.owner_team ?? 'Ohne Team'}
                                            </p>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                                            {template.category}
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <span
                                                className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ${statusClasses[template.status]}`}
                                            >
                                                {statusLabels[template.status]}
                                            </span>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900">
                                            {template.step_count}
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                                            {formatDate(template.updated_at)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </AuthenticatedLayout>
    );
}
