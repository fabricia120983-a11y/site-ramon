import type {Metadata} from 'next';
import { Inter, Lora } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const lora = Lora({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Ramon Alberto | Personal Trainer',
  description: 'Mais do que transformar o corpo, transforme sua relação com a saúde.',
  openGraph: {
    title: 'Ramon Alberto | Personal Trainer',
    description: 'Mais do que transformar o corpo, transforme sua relação com a saúde.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ramon Alberto | Personal Trainer',
    description: 'Mais do que transformar o corpo, transforme sua relação com a saúde.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${lora.variable} font-sans antialiased bg-[#0A0A0A] text-[#F5F5F5]`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
