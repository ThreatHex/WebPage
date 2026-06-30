import './globals.css';

export const metadata = {
  title: 'ThreatHex',
  description: 'Red team engagements, penetration testing, and incident response for organizations that assume they are already a target.',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
