import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Shell } from '../components/Shell';
export const metadata: Metadata = { title: { default: 'Aquila Repair | Fix it. Keep it. Pass it on.', template: '%s | Aquila Repair' }, description: 'Discover repair knowledge, community workshops and independent technicians across African cities.' };
export const viewport: Viewport = { width: 'device-width', initialScale: 1, userScalable: true, viewportFit: 'cover' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><head><link rel="stylesheet" href="/template/style.css" /><link rel="stylesheet" href="/template/animate.css" /></head><body><Shell>{children}</Shell></body></html>; }
