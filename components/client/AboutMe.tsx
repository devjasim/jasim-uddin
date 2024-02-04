import TextView from '@components/common/TextView';

export default function AboutMe() {
    return (
        <section className="mb-24 about-section" id="about">
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
                                        Hello! My name is Mohammad Montasim -Al- Mamun Shuvo and I enjoy creating things that live on the internet. My
                                        interest in web development started back in 2019 when I was doing a Diploma Engineering project - turns out
                                        this project taught me a lot about HTML, CSS, &amp; JavaScript.
                                    </span>
                                }
                            />
                            <TextView.Paragraph
                                size={'lg'}
                                className="mt-5"
                                text={
                                    <span>
                                        Fast-forward to today, and I’ve had the privilege of working at an My MedicalHUB International Ltd., as a
                                        Junior Frontend Developer. My main focus these days is building accessible, inclusive products and digital
                                        experiences using MERN Stack.
                                    </span>
                                }
                            />
                            <TextView.Paragraph size={'lg'} text={<span>So far, I&apos;ve built some exciting full stack project.</span>} />
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
                            React JS
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
                            Express.js
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
                            BootStrap
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
