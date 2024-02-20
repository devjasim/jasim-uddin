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
                        text="Companies that I've worked."
                    />
                </div>
            </div>
            <div className="flex flex-col items-center timeline-container">
                <div className="md:w-1/2 item">
                    <TimelineItem>
                        <div>
                            <div className="flex items-center gap-x-4">
                                <TextView.HeadingTwo className="font-bold text-[18px]" text="Software Engineer" />
                                {' • '}
                                <TextView.HeadingTwo className="font-medium" text="TulipTech LTD" />
                                <Link target="_blank noreferrer" href="https://tulip-tech.com">
                                    <BiLinkExternal />
                                </Link>
                            </div>
                            <TextView.Paragraph className="text-sm italic mt-1 opacity-80" text="March 2022 - Present" />
                            <TextView.Paragraph
                                className="mt-3 text-base description"
                                text="Working as a Software Engineer for build scalable and reliable user facing frontend application using React.js, Next.js, Redux, SCSS, CSS, etc. Lead the mentor the Frontend team for multiple projects"
                            />
                        </div>
                    </TimelineItem>
                </div>
                <div className="md:w-1/2 item">
                    <TimelineItem>
                        <div>
                            <div className="flex items-center gap-x-4">
                                <TextView.HeadingTwo className="font-bold text-[18px]" text="Frontend Engineer" />
                                {' • '}
                                <TextView.HeadingTwo className="font-medium" text="SEO Audit Agency" />
                                <Link target="_blank noreferrer" href="https://seoaudit.agency">
                                    <BiLinkExternal />
                                </Link>
                            </div>
                            <TextView.Paragraph className="text-sm italic mt-1 opacity-80" text="March 2020 - February 2022" />
                            <TextView.Paragraph
                                className="mt-3 text-base description"
                                text="Worked as Frontend engineer and played a crucial role to build a SaaS application using React.js, Redux and Material UI which provides SEO services. Gained a 50% company revenue growth. I've achieved a 50% boost on my skills in developing dashboard."
                            />
                        </div>
                    </TimelineItem>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
