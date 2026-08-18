import { Link } from '@inertiajs/react';

type NavigationItem = {
    name: string;
    href: string;
    active?: boolean;
    icon: string;
};

type SidebarProps = {
    navigation: NavigationItem[];
};

const iconPaths: Record<string, string> = {
    dashboard: 'M3 13.125C3 12.504 3.504 12 4.125 12h3.75c.621 0 1.125.504 1.125 1.125v6.75C9 20.496 8.496 21 7.875 21h-3.75A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 4.125C9.75 3.504 10.254 3 10.875 3h9c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-9A1.125 1.125 0 0 1 9.75 8.625v-4.5ZM10.875 12h9c.621 0 1.125.504 1.125 1.125v6.75c0 .621-.504 1.125-1.125 1.125h-9a1.125 1.125 0 0 1-1.125-1.125v-6.75c0-.621.504-1.125 1.125-1.125ZM3 4.125C3 3.504 3.504 3 4.125 3h3.75C8.496 3 9 3.504 9 4.125v4.5C9 9.246 8.496 9.75 7.875 9.75h-3.75A1.125 1.125 0 0 1 3 8.625v-4.5Z',
    processes: 'M6.75 3A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 0 6.75 21h10.5a2.25 2.25 0 0 0 2.25-2.25V8.621a2.25 2.25 0 0 0-.659-1.591l-3.371-3.371A2.25 2.25 0 0 0 13.879 3H6.75Zm1.5 9.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z',
    tasks: 'M5.25 3A2.25 2.25 0 0 0 3 5.25v13.5A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V5.25A2.25 2.25 0 0 0 18.75 3H5.25Zm10.28 6.53a.75.75 0 1 0-1.06-1.06l-4.72 4.72-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25c.293.293.767.293 1.06 0l5.25-5.25Z',
    approvals: 'M12 2.25c.414 0 .75.336.75.75v1.533a7.503 7.503 0 0 1 6.717 6.717H21a.75.75 0 0 1 0 1.5h-1.533a7.503 7.503 0 0 1-6.717 6.717V21a.75.75 0 0 1-1.5 0v-1.533a7.503 7.503 0 0 1-6.717-6.717H3a.75.75 0 0 1 0-1.5h1.533a7.503 7.503 0 0 1 6.717-6.717V3c0-.414.336-.75.75-.75Zm3.53 7.28a.75.75 0 1 0-1.06-1.06l-3.22 3.22-.97-.97a.75.75 0 1 0-1.06 1.06l1.5 1.5c.293.293.767.293 1.06 0l3.75-3.75Z',
    documents: 'M19.5 14.25v-2.879a2.25 2.25 0 0 0-.659-1.591l-5.621-5.621A2.25 2.25 0 0 0 11.629 3H7.5A2.25 2.25 0 0 0 5.25 5.25v13.5A2.25 2.25 0 0 0 7.5 21h9.75a2.25 2.25 0 0 0 2.25-2.25v-4.5ZM12 4.811V9.75A1.125 1.125 0 0 0 13.125 10.875h4.939L12 4.811Z',
    users: 'M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM3 19.5a6 6 0 0 1 12 0v.75H3v-.75ZM17.25 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM15.75 19.5a7.46 7.46 0 0 0-1.22-4.095A4.5 4.5 0 0 1 21 19.5v.75h-5.25v-.75Z',
    settings: 'M11.078 2.25c-.917 0-1.699.663-1.85 1.568l-.108.65a7.48 7.48 0 0 0-1.395.807l-.61-.229a1.875 1.875 0 0 0-2.286.866l-.922 1.596a1.875 1.875 0 0 0 .435 2.385l.503.421a7.54 7.54 0 0 0 0 1.612l-.503.421a1.875 1.875 0 0 0-.435 2.385l.922 1.596a1.875 1.875 0 0 0 2.286.866l.61-.229c.433.329.9.6 1.395.807l.108.65c.151.905.933 1.568 1.85 1.568h1.844c.917 0 1.699-.663 1.85-1.568l.108-.65a7.48 7.48 0 0 0 1.395-.807l.61.229a1.875 1.875 0 0 0 2.286-.866l.922-1.596a1.875 1.875 0 0 0-.435-2.385l-.503-.421a7.54 7.54 0 0 0 0-1.612l.503-.421a1.875 1.875 0 0 0 .435-2.385l-.922-1.596a1.875 1.875 0 0 0-2.286-.866l-.61.229a7.48 7.48 0 0 0-1.395-.807l-.108-.65a1.875 1.875 0 0 0-1.85-1.568h-1.844ZM12 14.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z',
};

export default function Sidebar({ navigation }: SidebarProps) {
    return (
        <aside className="hidden w-72 shrink-0 border-r border-slate-200/80 bg-white/90 px-4 py-5 shadow-sm shadow-slate-200/60 lg:fixed lg:inset-y-0 lg:flex lg:flex-col">
            <Link href="/" className="flex items-center gap-3 px-2">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-sm font-bold text-white shadow-lg shadow-blue-500/20">
                    FD
                </span>
                <span>
                    <span className="block text-lg font-semibold tracking-tight text-slate-950">
                        FlowDesk
                    </span>
                    <span className="block text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
                        Prozessplattform
                    </span>
                </span>
            </Link>

            <nav className="mt-8 space-y-1.5">
                {navigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition ${
                            item.active
                                ? 'bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-100'
                                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                        }`}
                    >
                        <svg
                            className={`h-5 w-5 ${item.active ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}`}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path d={iconPaths[item.icon]} />
                        </svg>
                        {item.name}
                    </Link>
                ))}
            </nav>

            <div className="mt-auto rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-violet-50 p-4">
                <p className="text-sm font-semibold text-slate-950">
                    Demo-Prozess: Softwarezugang
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                    Beispielprozess für Anträge, Freigaben, Aufgaben und
                    nachvollziehbare Aktivitäten.
                </p>
            </div>
        </aside>
    );
}
