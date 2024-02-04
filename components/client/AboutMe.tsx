import Link from 'next/link';

import TextView from '@components/common/TextView';

export default function AboutMe() {
    return (
        <section className="mb-24 md:mb-40 about-section" id="about">
            <div className="flex items-center gap-10 md:flex-row flex-col-reverse justify-between">
                <div className="md:w-full lg:w-1/7">
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
                                        As a Software Engineer specializing in the MERN stack with a focus on Frontend development, I bring four years
                                        of rich experience to the table. Throughout my career, I&apos;ve had the privilege of contributing to a
                                        variety of projects within three distinct companies in Bangladesh.
                                    </span>
                                }
                            />
                            <TextView.Paragraph
                                size={'lg'}
                                className="mt-5"
                                text={
                                    <span>
                                        Presently, I am working with{' '}
                                        <Link className="text-primary" target="_blank" href="https://tulip-tech.com">
                                            TulipTech LTD
                                        </Link>
                                        , a dynamic UK-based software company active in Bangladesh. Here, my role centers around developing
                                        user-centric applications that deliver significant real-world impact. My commitment lies in crafting rich,
                                        interactive experiences tailored to meet user needs and overcome real-world challenges.
                                    </span>
                                }
                            />
                            <TextView.Paragraph
                                className="my-5"
                                size={'lg'}
                                text={<span>Here are a few technologies I’ve been working with recently:</span>}
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
                            JavaScript (ES6+)
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
                            React.JS
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
                            Redux
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
