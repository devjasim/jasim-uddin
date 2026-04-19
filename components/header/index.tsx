'use client';
import Link from 'next/link';

import React from 'react';

import Button from '@components/common/Button';
import TextView from '@components/common/TextView';
import ThemeToggle from '@components/common/ThemeToggle';

export default function Header() {
    const [activeSection, setActiveSection] = React.useState('');

    React.useEffect(() => {
        setActiveSection(window.location.hash);

        const handleHashChange = () => {
            setActiveSection(window.location.hash);
        };
        window.addEventListener('hashchange', handleHashChange);

        const sectionIds = ['introduction', 'about', 'education', 'experience', 'section-projects', 'contact'];
        const observer = new IntersectionObserver(
            entries => {
                const visible = entries.filter(e => e.isIntersecting);
                if (visible.length > 0) {
                    const topmost = visible.reduce((a, b) => (a.boundingClientRect.top < b.boundingClientRect.top ? a : b));
                    setActiveSection(`#${topmost.target.id}`);
                }
            },
            { rootMargin: '-20% 0px -60% 0px', threshold: 0 },
        );

        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
            observer.disconnect();
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
                            <li className={`navbar-item ${activeSection?.includes('introduction') ? 'active' : ''}`}>
                                <a href="/#introduction">Home</a>
                            </li>
                            <li className={`navbar-item ${activeSection?.includes('about') ? 'active' : ''}`}>
                                <a href="/#about">About</a>
                            </li>
                            <li className={`navbar-item ${activeSection?.includes('education') ? 'active' : ''}`}>
                                <a href="/#education">Education</a>
                            </li>
                            <li className={`navbar-item ${activeSection?.includes('experience') ? 'active' : ''}`}>
                                <a href="/#experience">Experience</a>
                            </li>
                            <li className={`navbar-item ${activeSection?.includes('section-projects') ? 'active' : ''}`}>
                                <a href="/#section-projects">Projects</a>
                            </li>
                            <li className={`navbar-item ${activeSection?.includes('contact') ? 'active' : ''}`}>
                                <a href="/#contact">Contact</a>
                            </li>
                            <li>
                                <a
                                    className=""
                                    href="https://docs.google.com/document/d/1N4UgSvvT0_9-SYdfBae39gy4AtJT3CKF1g2r2mON4SQ/edit?usp=sharing"
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
