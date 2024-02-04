import TextView from '@components/common/TextView';

export default function EducationSection() {
    return (
        <section className="mb-24" id="education">
            <div className="mb-12">
                <div className="flex items-center gap-6">
                    <TextView.HeadingOne className="lg:text-3xl md:text-3xl text-2xl text-accent font-bold main-heading" text="Education" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-start gap-20 md:gap-x-20">
                <div>
                    <TextView.HeadingThree
                        className="text-accent text-xl font-semibold"
                        text="Bachelor of Science, Computer Science and Engineering"
                    />
                    <TextView.HeadingThree className="text-lg my-2" text="Uttara University, Dhaka, Bangladesh" />
                    <TextView.Paragraph className="text-accent" text="January 2020 - October 2023" />
                    <div className="mt-5 grid gap-y-2 ml-3">
                        <TextView.Paragraph
                            className="flex items-center gap-x-3"
                            text={
                                <>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="text-primary text-sm"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path>
                                    </svg>
                                    Intensive course with core computer science topics.
                                </>
                            }
                        />
                        <TextView.Paragraph
                            className="flex items-center gap-x-3"
                            text={
                                <>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="text-primary text-sm"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path>
                                    </svg>
                                    C, C++, Java, Data Structures, Algorithms, OOP, DBMS.
                                </>
                            }
                        />
                        <TextView.Paragraph
                            className="flex items-center gap-x-3"
                            text={
                                <>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="text-primary text-sm"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path>
                                    </svg>
                                    Android application development.
                                </>
                            }
                        />
                        <TextView.Paragraph
                            className="flex items-center gap-x-3"
                            text={
                                <>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="text-primary text-sm"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path>
                                    </svg>
                                    Different software design patterns.
                                </>
                            }
                        />
                    </div>
                </div>
                <div>
                    <TextView.HeadingThree className="text-accent text-xl font-semibold" text="Diploma in Computer Engineering" />
                    <TextView.HeadingThree className="text-lg my-2" text="MAIT Engineering Institute, Dhaka, Bangladesh" />
                    <TextView.Paragraph className="text-accent" text="January 2020 - October 2023" />
                    <div className="mt-5 grid gap-y-2 ml-3">
                        <TextView.Paragraph
                            className="flex items-center gap-x-3"
                            text={
                                <>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="text-primary text-sm"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path>
                                    </svg>
                                    Intensive course with core computer science topics.
                                </>
                            }
                        />
                        <TextView.Paragraph
                            className="flex items-center gap-x-3"
                            text={
                                <>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="text-primary text-sm"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path>
                                    </svg>
                                    Data Structure, programming languages, science, HTML, CSS, Responsive Design
                                </>
                            }
                        />
                        <TextView.Paragraph
                            className="flex items-center gap-x-3"
                            text={
                                <>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="text-primary text-sm"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path>
                                    </svg>
                                    Web Application Development
                                </>
                            }
                        />
                        <TextView.Paragraph
                            className="flex items-center gap-x-3"
                            text={
                                <>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="text-primary text-sm"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path>
                                    </svg>
                                    Technology, science and accounts.
                                </>
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
