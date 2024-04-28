'use client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import React from 'react';

import Button from '@components/common/Button';
import TextView from '@components/common/TextView';
import ThemeToggle from '@components/common/ThemeToggle';

export default function Header() {
    const [hash, setHash] = React.useState('');

    React.useEffect(() => {
        setHash(window.location.hash);
        const handleHashChange = () => {
            setHash(window.location.hash);
        };
        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const [isMenuOPen, setIsMenuOpen] = React.useState(false);

    return (
        <div className="navbar flex items-center fixed shadow-md top-0 z-50 dark:bg-secondary h-14 md:h-16 lg:h-20 w-full">
            <div className="flex justify-between !px-4 items-center container mx-auto">
                <div className="navbar-start">
                    <TextView.HeadingOne className="text-xl font-bold !text-primary uppercase" text={<Link href="/"> Jasim Uddin</Link>} />
                </div>
                <div className="navbar-end">
                    <div className={`navbar-items lg:flex ${isMenuOPen ? 'show-menu' : 'hide-menu'}`}>
                        <ul className="menu flex justify-between items-center gap-x-5 xl:gap-x-8 2xl:gap-x-10">
                            <li className={`navbar-item ${hash?.includes('introduction') ? 'active' : ''}`}>
                                <a href="/#introduction">Home</a>
                            </li>
                            <li className={`navbar-item ${hash?.includes('about') ? 'active' : ''}`}>
                                <a href="/#about">About</a>
                            </li>
                            <li className={`navbar-item ${hash?.includes('education') ? 'active' : ''}`}>
                                <a href="/#education">Education</a>
                            </li>
                            <li className={`navbar-item ${hash?.includes('experience') ? 'active' : ''}`}>
                                <a href="/#experience">Experience</a>
                            </li>
                            <li className={`navbar-item ${hash?.includes('section-projects') ? 'active' : ''}`}>
                                <a href="/#section-projects">Projects</a>
                            </li>
                            <li className={`navbar-item ${hash?.includes('contact') ? 'active' : ''}`}>
                                <a href="/#contact">Contact</a>
                            </li>
                            <li>
                                <a
                                    className=""
                                    href="https://docs.google.com/document/d/1D-Bkf8RmwSnyYLe6mOFhulnEl1okAVXwc_twqYD6zmE/edit?usp=sharing"
                                    target="_blank"
                                    rel="noreferrer">
                                    <Button label="Resume" />
                                </a>
                            </li>
                            <li className="hidden lg:block">
                                <ThemeToggle />
                            </li>
                        </ul>
                    </div>
                    <div className="block lg:hidden dropdown dropdown-end">
                        <ul className="flex items-center justify-start sm:gap-x-16 gap-x-10">
                            <li>
                                <ThemeToggle />
                            </li>
                            <li className="menu-toggle">
                                <div onClick={() => setIsMenuOpen(!isMenuOPen)} className={`${isMenuOPen ? 'collapsed' : ''} menu-toggle-button`}>
                                    <div className="one">
                                        <span>
                                            <span />
                                        </span>
                                    </div>
                                    <div className="two">
                                        <span>
                                            <span />
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
