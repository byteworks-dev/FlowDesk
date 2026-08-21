import Sidebar from '@/Components/layout/Sidebar';
import Topbar from '@/Components/layout/Topbar';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, useState } from 'react';

type AppShellProps = PropsWithChildren<{
    header?: ReactNode;
}>;

const navigation = [
    {
        name: 'Dashboard',
        href: route('dashboard'),
        active: route().current('dashboard'),
        icon: 'dashboard',
    },
    { name: 'Prozesse', href: '#', icon: 'processes' },
    { name: 'Aufgaben', href: '#', icon: 'tasks' },
    { name: 'Freigaben', href: '#', icon: 'approvals' },
    { name: 'Dokumente', href: '#', icon: 'documents' },
    {
        name: 'Benutzer',
        href: route('users.index'),
        active: route().current('users.*'),
        icon: 'users',
    },
    { name: 'Einstellungen', href: '#', icon: 'settings' },
];

export default function AppShell({ header, children }: AppShellProps) {
    const user = usePage().props.auth.user;
    const [showMobileNavigation, setShowMobileNavigation] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <Sidebar navigation={navigation} />

            {showMobileNavigation && (
                <div className="fixed inset-0 z-40 lg:hidden">
                    <button
                        type="button"
                        className="absolute inset-0 bg-slate-950/40"
                        onClick={() => setShowMobileNavigation(false)}
                        aria-label="Close navigation"
                    />
                    <div className="absolute inset-y-0 left-0 w-80 max-w-[86vw] border-r border-slate-200 bg-white p-4 shadow-2xl">
                        <div className="mb-6 flex items-center justify-between">
                            <Link href="/" className="flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-sm font-bold text-white">
                                    FD
                                </span>
                                <span className="font-semibold text-slate-950">
                                    FlowDesk
                                </span>
                            </Link>
                            <button
                                type="button"
                                onClick={() => setShowMobileNavigation(false)}
                                className="rounded-2xl p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                                aria-label="Close navigation"
                            >
                                <svg
                                    className="h-5 w-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18 18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        <nav className="space-y-1.5">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setShowMobileNavigation(false)}
                                    className={`flex items-center rounded-2xl px-3 py-2.5 text-sm font-medium transition ${
                                        item.active
                                            ? 'bg-blue-50 text-blue-700'
                                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            )}

            <div className="lg:pl-72">
                <Topbar
                    user={user}
                    onMenuClick={() => setShowMobileNavigation(true)}
                />

                <main className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
                    {header && <div className="mb-6">{header}</div>}
                    {children}
                </main>
            </div>
        </div>
    );
}
