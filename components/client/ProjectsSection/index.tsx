import TextView from '@components/common/TextView';

export default function ProjectsSection() {
    return (
        <section className="mb-24 md:mb-40" id="education">
            <div className="mb-12">
                <div className="flex items-center gap-6">
                    <TextView.HeadingOne className="lg:text-3xl md:text-3xl text-2xl text-accent font-bold main-heading" text="Things I've built." />
                </div>
            </div>
        </section>
    );
}
