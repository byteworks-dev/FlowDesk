type MetricCardProps = {
    label: string;
    value: string;
    change: string;
    tone: 'blue' | 'violet' | 'amber' | 'emerald';
};

const toneClasses = {
    blue: 'from-blue-500 to-cyan-500 shadow-blue-500/20',
    violet: 'from-violet-500 to-fuchsia-500 shadow-violet-500/20',
    amber: 'from-amber-500 to-orange-500 shadow-amber-500/20',
    emerald: 'from-emerald-500 to-teal-500 shadow-emerald-500/20',
};

export default function MetricCard({ label, value, change, tone }: MetricCardProps) {
    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-sm font-medium text-slate-500">{label}</p>
                    <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                        {value}
                    </p>
                </div>
                <span
                    className={`h-11 w-11 rounded-2xl bg-gradient-to-br shadow-lg ${toneClasses[tone]}`}
                />
            </div>
            <p className="mt-4 text-sm font-medium text-slate-500">{change}</p>
        </div>
    );
}
