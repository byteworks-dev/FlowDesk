import AppShell from '@/Components/layout/AppShell';
import { PropsWithChildren, ReactNode } from 'react';

export default function AuthenticatedLayout({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    return <AppShell header={header}>{children}</AppShell>;
}
