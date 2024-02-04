import TextView from '@components/common/TextView';

import StatusItem from './TimelineItem';

const ExperienceSection = () => {
    return (
        <section className="mb-24 experience-timeline" id="experience">
            <div className="mb-12 xl:max-w-3xl mx-auto">
                <div className="flex items-center gap-6">
                    <TextView.HeadingOne
                        className="lg:text-3xl md:text-3xl text-2xl text-accent font-bold main-heading"
                        text="Companies that I've worked."
                    />
                </div>
            </div>
            <div className="flex flex-col items-center timeline-container">
                <div className="md:w-1/2 item">
                    <StatusItem
                        status="Tulip Tech LTD"
                        date="01/03/2022"
                        description="Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus."
                        completed
                    />
                    {/* Repeat for other items */}
                </div>
                <div className="md:w-1/2 item">
                    <StatusItem
                        status="SEO Audit Agency"
                        date="01/03/2020"
                        description="Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus."
                        completed
                    />
                    {/* Repeat for other items */}
                </div>
                <div className="md:w-1/2 item">
                    <StatusItem
                        status="Print Wizard"
                        date="01/08/2019"
                        description="Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus."
                        completed
                    />
                    {/* Repeat for other items */}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
