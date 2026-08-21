import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

type DirectoryUser = {
    id: number;
    name: string;
    email: string;
    role: string;
    team: string | null;
    status: 'active' | 'invited' | 'inactive';
    joined_at: string | null;
};

type UsersIndexProps = {
    users: DirectoryUser[];
};

const statusLabels: Record<DirectoryUser['status'], string> = {
    active: 'Aktiv',
    invited: 'Eingeladen',
    inactive: 'Inaktiv',
};

const statusClasses: Record<DirectoryUser['status'], string> = {
    active: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
    invited: 'bg-blue-50 text-blue-700 ring-blue-100',
    inactive: 'bg-slate-100 text-slate-600 ring-slate-200',
};

const formatDate = (date: string | null) => {
    if (!date) {
        return 'Noch nicht beigetreten';
    }

    return new Intl.DateTimeFormat('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }).format(new Date(date));
};

export default function UsersIndex({ users }: UsersIndexProps) {
    const activeUsers = users.filter((user) => user.status === 'active').length;
    const invitedUsers = users.filter((user) => user.status === 'invited').length;
    const inactiveUsers = users.filter((user) => user.status === 'inactive').length;

    const stats = [
        { label: 'Mitarbeitende gesamt', value: users.length },
        { label: 'Aktiv', value: activeUsers },
        { label: 'Eingeladen', value: invitedUsers },
        { label: 'Inaktiv', value: inactiveUsers },
    ];

    return (
        <AuthenticatedLayout>
            <Head title="Mitarbeitende" />

            <div className="space-y-6">
                <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70 sm:p-8">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                                Benutzerverwaltung
                            </span>
                            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                                Mitarbeitende
                            </h1>
                            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                                Erste zentrale Uebersicht fuer Personen, Teams und
                                Rollen im FlowDesk-Arbeitsbereich. Die Daten
                                kommen aus der Datenbank und dienen als Grundlage
                                fuer spaetere Aufgaben, Freigaben und Prozesse.
                            </p>
                        </div>

                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                        >
                            Mitarbeitenden einladen
                        </button>
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

                <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/70">
                    <div className="border-b border-slate-200 px-6 py-5 sm:px-8">
                        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                            <div>
                                <h2 className="text-lg font-semibold text-slate-950">
                                    Personen im System
                                </h2>
                                <p className="mt-1 text-sm text-slate-500">
                                    Demo-Verzeichnis fuer spaetere Mandanten-, Team-
                                    und Rollenfunktionen.
                                </p>
                            </div>
                            <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                                {users.length} Eintraege
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-slate-200">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 sm:px-8">
                                        Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                        Team
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                        Rolle
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                        Beitritt
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 bg-white">
                                {users.map((user) => (
                                    <tr
                                        key={user.id}
                                        className="transition hover:bg-slate-50/80"
                                    >
                                        <td className="whitespace-nowrap px-6 py-4 sm:px-8">
                                            <div className="flex items-center gap-3">
                                                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-sm font-semibold text-white">
                                                    {user.name
                                                        .split(' ')
                                                        .map((part) => part[0])
                                                        .join('')
                                                        .slice(0, 2)
                                                        .toUpperCase()}
                                                </span>
                                                <div>
                                                    <p className="text-sm font-semibold text-slate-950">
                                                        {user.name}
                                                    </p>
                                                    <p className="text-sm text-slate-500">
                                                        {user.email}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                                            {user.team ?? 'Kein Team'}
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900">
                                            {user.role}
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <span
                                                className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ${statusClasses[user.status]}`}
                                            >
                                                {statusLabels[user.status]}
                                            </span>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                                            {formatDate(user.joined_at)}
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
