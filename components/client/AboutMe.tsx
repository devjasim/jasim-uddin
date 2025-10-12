import Link from 'next/link';

import TextView from '@components/common/TextView';

export default function AboutMe() {
    return (
        <section className="mb-24 md:mb-40 about-section" id="about">
            <div className="flex items-center gap-10 md:flex-row flex-col-reverse justify-between">
                <div className="md:w-full lg:w-1/7 max-w-full">
                    <div className="scroll-animation">
                        <div className="flex items-center justify-start gap-x-10">
                            <TextView.HeadingOne
                                className="lg:text-3xl md:text-3xl text-2xl text-accent font-bold main-heading"
                                text={<span>About Me</span>}
                            />
                        </div>
                        <div className="mt-12 text-justify lg:w-7/12 md:w-full w-full">
                            <TextView.Paragraph
                                size={'lg'}
                                text={
                                    <span>
                                        As a Senior Software Engineer with 5+ years of experience, I specialize in building scalable, high-performance
                                        web applications using modern JavaScript frameworks. Throughout my career, I&apos;ve successfully reduced
                                        build times by 50%, improved design consistency by 90%, and delivered better user experiences across
                                        healthcare, finance, and SaaS platforms.
                                    </span>
                                }
                            />
                            <TextView.Paragraph
                                size={'lg'}
                                className="mt-5"
                                text={
                                    <span>
                                        Currently, I am working as a Senior Software Engineer at{' '}
                                        <Link className="text-primary" target="_blank" href="https://tulip-tech.com">
                                            TulipTech LTD
                                        </Link>
                                        , a UK-based software company. I architect and lead a micro-frontend monorepo of 9 healthcare apps, built a
                                        reusable UI library with 50+ components, and mentor engineers on modern frontend architecture. My work focuses
                                        on creating enterprise-grade solutions that deliver real-world impact.
                                    </span>
                                }
                            />
                            <TextView.Paragraph
                                className="my-5"
                                size={'lg'}
                                text={<span>Here are a few technologies I&apos;ve been working with recently:</span>}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 w-96 mb-10 md:mb-0 lg:mb-0">
                        <small className="flex items-center gap-x-3">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                className="text-primary"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path>
                            </svg>{' '}
                            TypeScript
                        </small>
                        <small className="flex items-center gap-x-3">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                className="text-primary"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path>
                            </svg>
                            React.js
                        </small>
                        <small className="flex items-center gap-x-3">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                className="text-primary"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path>
                            </svg>
                            Next.js
                        </small>
                        <small className="flex items-center gap-x-3">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                className="text-primary"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path>
                            </svg>
                            Node.js
                        </small>
                        <small className="flex items-center gap-x-3">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                className="text-primary"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path>
                            </svg>
                            Turborepo
                        </small>
                        <small className="flex items-center gap-x-3">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                className="text-primary"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path>
                            </svg>
                            Tailwind CSS
                        </small>
                        <small className="flex items-center gap-x-3">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                className="text-primary"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path>
                            </svg>
                            GraphQL
                        </small>
                        <small className="flex items-center gap-x-3">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                className="text-primary"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path>
                            </svg>
                            React Query
                        </small>
                    </div>
                </div>
                <div className="w-64 lg:w-96 relative profile-picture">
                    <span className="absolute inset-0 border-2 border-primary border-solid rounded-md"></span>
                    <div className="transition-transform wrapper transform bg-accent -translate-x-5 -translate-y-5">
                        <img className="rounded-md" src="/images/jasim_uddin.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
