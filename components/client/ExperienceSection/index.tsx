import Link from 'next/link';

import { BiLinkExternal } from 'react-icons/bi';

import TextView from '@components/common/TextView';

import TimelineItem from './TimelineItem';

const ExperienceSection = () => {
    return (
        <section className="mb-24 md:mb-40 experience-timeline" id="experience">
            <div className="mb-20 xl:max-w-3xl mx-auto">
                <div className="flex items-center gap-6">
                    <TextView.HeadingOne
                        className="lg:text-3xl md:text-3xl text-2xl text-accent font-bold main-heading"
                        text="Companies that I've worked"
                    />
                </div>
            </div>
            <div className="flex flex-col items-center timeline-container">
                <div className="md:w-1/2 item">
                    <TimelineItem>
                        <div>
                            <div className="sm:flex space-y-4 sm:space-y-0 block items-center gap-x-4">
                                <TextView.HeadingTwo className="font-bold text-[18px]" text="Senior Software Engineer" />
                                <span className="hidden sm:block">•</span>
                                <div className="flex items-center justify-start gap-x-4">
                                    <TextView.HeadingTwo className="font-medium" text="TulipTech LTD" />
                                    <Link target="_blank noreferrer" href="https://tulip-tech.com">
                                        <BiLinkExternal />
                                    </Link>
                                </div>
                            </div>
                            <TextView.Paragraph className="text-sm italic mt-1 opacity-80" text="March 2022 - Present" />
                            <TextView.Paragraph
                                className="mt-3 text-base description"
                                text={
                                    <>
                                        Architected and led a micro-frontend monorepo of 9 healthcare apps using Turborepo, reducing build times by
                                        ~40-60% and boosting app performance by ~35-50%. Built a reusable UI library with 50+ components and mentored
                                        engineers on modern frontend architecture, improving team productivity by 35%.
                                    </>
                                }
                            />
                        </div>
                    </TimelineItem>
                </div>
                <div className="md:w-1/2 item">
                    <TimelineItem>
                        <div>
                            <div className="sm:flex block space-y-4 sm:space-y-0 items-center gap-x-4">
                                <TextView.HeadingTwo className="font-bold text-[18px]" text="Frontend Engineer" />
                                <span className="hidden sm:block">•</span>
                                <div className="flex items-center justify-start gap-x-4">
                                    <TextView.HeadingTwo className="font-medium" text="SEO Audit Agency" />
                                    <Link target="_blank noreferrer" href="https://seoaudit.agency">
                                        <BiLinkExternal />
                                    </Link>
                                </div>
                            </div>
                            <TextView.Paragraph className="text-sm italic mt-1 opacity-80" text="March 2020 - February 2022" />
                            <TextView.Paragraph
                                className="mt-3 text-base description"
                                text={
                                    <>
                                        Developed SEO service providing software in an agile environment using React, Redux, TypeScript, and
                                        pixel-perfect design. Led scaling and implementation of new features including white label tools, page audit
                                        and report generation tools, and keyword research tools, resulting in a 50% increase in premium user traffic
                                        and 90% revenue growth.
                                    </>
                                }
                            />
                        </div>
                    </TimelineItem>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
