import Button from '../common/Button';
import TextView from '../common/TextView';

export default function HeroSection() {
    return (
        <section id="introduction" className="lg:mt-28 md:mt-28 mt-24 mb-28 lg:mb-48">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="hero-section-content">
                    <TextView.Paragraph className="mb-2 text-primary dark:text-primary text-[18px]" text="Hi, my name is" />
                    <TextView.HeadingOne className="lg:text-[66px] md:text-[46px] font-bold text-[36px]" text="Jasim Uddin" />
                    <TextView.HeadingTwo
                        className="lg:text-[66px] md:text-[46px] font-bold text-[36px]  opacity-70"
                        text="I build things for the web."
                    />
                    <TextView.Paragraph
                        className="mt-4 py-2 lg:w-7/12 text-[18px]"
                        text="I'm a software engineer with 5+ years of experience building scalable, high-performance web applications. Specialized in React, Next.js, and TypeScript with a proven track record in healthcare, finance, and SaaS platforms."
                    />
                </div>
                <a
                    href="https://docs.google.com/document/d/1N4UgSvvT0_9-SYdfBae39gy4AtJT3CKF1g2r2mON4SQ/edit?usp=sharing"
                    target="_blank"
                    className="mt-16 block max-w-fit"
                    rel="noreferrer">
                    <Button size="md" variant="outline" label="Download My Resume" />
                </a>
            </div>
        </section>
    );
}
