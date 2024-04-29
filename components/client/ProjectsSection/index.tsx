import { BiLinkExternal } from 'react-icons/bi';

import Button from '@components/common/Button';
import TextView from '@components/common/TextView';

export default function ProjectsSection() {
    return (
        <section className="mb-24 md:mb-40" id="section-projects">
            <div className="mb-12">
                <div className="flex items-center gap-6">
                    <TextView.HeadingOne
                        className="lg:text-3xl md:text-3xl text-2xl text-accent font-bold main-heading"
                        text="Things I've built recently"
                    />
                </div>
            </div>
            <div className="flex items-center justify-center w-full">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative single-project">
                        <div className="cover-image rounded-md h-full w-full relative z-10">
                            <img className="w-full h-full rounded-md" src="/images/BanglaTalentJobPortal.png" alt="BanglaTalent" />
                        </div>
                        <div className="content bg-primary rounded-md z-20 bg-opacity-30 w-full h-full absolute top-0 left-0">
                            <div className="h-full flex items-center justify-center">
                                <div className="card">
                                    <h2 className="text-xl font-bold text-white">BanglaTalent Job Portal</h2>
                                    <div className="description text-sm">
                                        Bangla Talent is a versatile job portal that connects job seekers with top opportunities in their home country
                                        and the UK, catering to both local and international career aspirations.
                                        <p className="mt-2">
                                            I designed the frontend architecture of this application and collaborated with junior team members to
                                            successfully drive the project to completion.
                                        </p>
                                    </div>
                                    <div className="self-center mt-4">
                                        <a href="https://banglatalent.com" target="_blank">
                                            <Button variant="outline" label="View More" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative single-project">
                        <div className="cover-image h-full w-full rounded-md relative z-10">
                            <img className="w-full h-full rounded-md" src="/images/CareAppsDashboard.png" alt="CareApps" />
                        </div>
                        <div className="content bg-primary rounded-md z-20 bg-opacity-30 w-full h-full absolute top-0 left-0">
                            <div className="w-full content-wrapper h-full flex items-center justify-center">
                                <div className="card">
                                    <h2 className="text-xl font-bold text-white">CareApps for UK Care Homes</h2>
                                    <div className="description text-sm">
                                        CareApps is a dashboard application that provides entire solution for Care Homes in the UK including, HR and
                                        Medication Management for Resident and more.
                                        <p className="mt-2">
                                            I have build and design interactive pixel perfect UI of this application, and implemented business logic
                                            including integrated backend APIs.
                                        </p>
                                    </div>
                                    <div className="self-center mt-4">
                                        <Button variant="outline" label="View More" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
