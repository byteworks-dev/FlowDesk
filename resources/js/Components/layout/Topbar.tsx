import Dropdown from '@/Components/Dropdown';
import { User } from '@/types';

type TopbarProps = {
    user: User;
    onMenuClick: () => void;
};

export default function Topbar({ user, onMenuClick }: TopbarProps) {
    const initials = user.name
        .split(' ')
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();

    return (
        <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
            <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={onMenuClick}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 lg:hidden"
                        aria-label="Open navigation"
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
                                d="M4 7h16M4 12h16M4 17h16"
                            />
                        </svg>
                    </button>

                    <div>
                        <p className="text-sm font-medium text-slate-500">
                            Arbeitsbereich
                        </p>
                        <p className="text-base font-semibold text-slate-950">
                            FlowDesk Prozesse
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="hidden items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-500 sm:flex">
                        <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
                        Demo-Umgebung
                    </div>

                    <Dropdown>
                        <Dropdown.Trigger>
                            <button
                                type="button"
                                className="flex items-center gap-3 rounded-full border border-slate-200 bg-white py-1.5 pl-1.5 pr-3 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
                            >
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                                    {initials}
                                </span>
                                <span className="hidden text-left sm:block">
                                    <span className="block text-sm font-semibold text-slate-900">
                                        {user.name}
                                    </span>
                                    <span className="block text-xs text-slate-500">
                                        {user.email}
                                    </span>
                                </span>
                                <svg
                                    className="h-4 w-4 text-slate-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </Dropdown.Trigger>

                        <Dropdown.Content contentClasses="py-1 bg-white">
                            <Dropdown.Link href={route('profile.edit')}>
                                Profil
                            </Dropdown.Link>
                            <Dropdown.Link
                                href={route('logout')}
                                method="post"
                                as="button"
                            >
                                Abmelden
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                </div>
            </div>
        </header>
    );
}
