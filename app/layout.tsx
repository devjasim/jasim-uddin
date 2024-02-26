import type { Metadata } from 'next';
import { Barlow } from 'next/font/google';

import SocialLinks from '@components/client/SocialLinks';
import Provider from '@components/common/Providers';
import Footer from '@components/footer';
import Header from '@components/header';

import './globals.scss';

const inter = Barlow({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
    title: 'Jasim Uddin - Software Engineer Portfolio | Frontend Expert | Bangladesh',
    description:
        'Welcome to the portfolio of Jasim Uddin, a passionate Software Engineer from Bangladesh with 4 years of experience. Explore my projects and expertise!',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`dark:bg-background transition-colors ease-in-out duration-200 bg-white text-background dark:text-text ${inter.className}`}>
                <Provider>
                    <main>
                        <Header />
                        <SocialLinks />
                        <div className="md:mt-16 mt-14 lg:mt-20 max-h-[calc(100vh-80px)] overflow-y-auto max-w-full overflow-x-hidden">
                            {children}
                            <Footer />
                        </div>
                    </main>
                </Provider>
            </body>
        </html>
    );
}
