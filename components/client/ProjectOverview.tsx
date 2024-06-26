import Link from 'next/link';

import { BiLinkExternal } from 'react-icons/bi';
import { BsArrowRightSquare } from 'react-icons/bs';

import TextView from '@components/common/TextView';

export default function ProjectOverview() {
    return (
        <section className="text-white mb-32 md:mb-48 mx-0 md:mx-40 lg:mx-0 xl:mx-32 section-overview">
            <div className="mx-auto">
                <ul className="mt-8 dark:divide-white grid gap-6 lg:grid-cols-3 text-center">
                    <li className="p-8 bg-text-100 bg-opacity-5 rounded-md">
                        <TextView.Paragraph className="text-3xl font-extrabold text-primary dark:text-primary" text="7+" />
                        <TextView.Paragraph className="mt-1 text-xl font-medium text-primary dark:text-primary" text="Frontend Projects" />
                        <div className="redirect">
                            <Link href="/#section-projects">
                                <BsArrowRightSquare />
                            </Link>
                        </div>
                    </li>
                    <li className="p-8 bg-text-100 bg-opacity-5 rounded-md">
                        <TextView.Paragraph text="2+" className="text-3xl font-extrabold text-primary dark:text-primary" />
                        <TextView.Paragraph text="Backend Projects" className="mt-1 text-xl text-primary dark:text-primary font-medium" />
                        <div className="redirect">
                            <Link href="/#section-projects">
                                <BsArrowRightSquare />
                            </Link>
                        </div>
                    </li>
                    <li className="p-8 bg-text-100 bg-opacity-5 rounded-md">
                        <TextView.Paragraph text="1800+" className="text-3xl font-extrabold text-primary dark:text-primary" />
                        <TextView.Paragraph text="Total Commits" className="mt-1 text-xl text-primary dark:text-primary font-medium" />
                        <div className="redirect">
                            <Link href="https://github.com/devjasim" target="_blank">
                                <BiLinkExternal />
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}
