'use client';
import Link from 'next/link';

import Button from '@components/common/Button';
import TextView from '@components/common/TextView';
import ThemeToggle from '@components/common/ThemeToggle';

export default function Header() {
    return (
        <div id="navbarHide" className="navbar flex items-center fixed shadow-md top-0 z-50 dark:bg-secondary h-14 md:h-16 lg:h-20 w-full">
            <div className="flex justify-between px-4 items-center container mx-auto">
                <div className="navbar-start">
                    <TextView.HeadingOne className="text-xl font-bold !text-primary uppercase" text={<Link href="/"> Jasim Uddin</Link>} />
                </div>
                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu flex justify-between items-center gap-x-16">
                            <li>
                                <a href="/#introduction">Home</a>
                            </li>
                            <li>
                                <a href="/#about">About</a>
                            </li>
                            <li>
                                <a href="/#education">Education</a>
                            </li>
                            <li>
                                <a href="/#experience">Experience</a>
                            </li>
                            <li>
                                <a href="/#contact">Contact</a>
                            </li>
                            <li>
                                <a
                                    className=""
                                    href="https://docs.google.com/document/d/1ZENrcgtfmx5tarZ8fZ-dB17oWfrBtAoEfx04WlV6DdM/edit?usp=sharing"
                                    target="_blank"
                                    rel="noreferrer">
                                    <Button label="Resume" />
                                </a>
                            </li>
                            <li>
                                <ThemeToggle />
                            </li>
                        </ul>
                    </div>
                    <div className="block md:hidden lg:hidden dropdown dropdown-end">
                        <label className="btn btn-ghost lg:hidden">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                className="text-4xl"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
                            </svg>
                        </label>
                        <ul className="menu menu-compact dropdown-content mt-3 p-3 shadow rounded-box w-52 bg-[#112240]">
                            <li>
                                <a href="/#introduction">Home</a>
                            </li>
                            <li>
                                <a href="/#about">About</a>
                            </li>
                            <li>
                                <a href="/#education">Education</a>
                            </li>
                            <li>
                                <a href="/#projects">Projects</a>
                            </li>
                            <li>
                                <a href="/#contact">Contact</a>
                            </li>
                            <li className="ml-2">
                                <a
                                    className="btn btn-sm rounded pb-6 bg-primary hover:bg-base-100 text-black hover:text-accent hover:border hover:border-primary"
                                    href="https://drive.google.com/file/d/1sR4CxyIYw1uIesJHWaERKDGOBwfOVUcH/view?usp=sharing"
                                    target="_blank"
                                    rel="noreferrer">
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
