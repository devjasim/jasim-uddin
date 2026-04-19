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
                                        Senior Frontend Engineer with 6+ years of experience building production-grade web applications using React,
                                        Next.js, and TypeScript. I&apos;ve architected monorepo platforms, built shared component libraries, and led
                                        frontend teams delivering real-world impact across healthcare, fintech, and SaaS domains.
                                    </span>
                                }
                            />
                            <TextView.Paragraph
                                size={'lg'}
                                className="mt-5"
                                text={
                                    <span>
                                        Currently at{' '}
                                        <Link className="text-primary" target="_blank" href="https://tulip-tech.com">
                                            TulipTech LTD
                                        </Link>
                                        , I architect and lead a Turborepo monorepo housing 9 interconnected healthcare apps for UK care homes. I
                                        built and maintain a shared UI component library (50+ components) used across all products, lead a team of 10
                                        frontend engineers across UK/Bangladesh time zones, and recently migrated the platform to Next.js 15 with
                                        React 19.
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
