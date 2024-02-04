'use client';

import AboutMe from '@components/client/AboutMe';
import EducationSection from '@components/client/EducationSection';
import HeroSection from '@components/client/HeroSection';
import ProjectOverview from '@components/client/ProjectOverview';
import TextView from '@components/common/TextView';

export default function Home() {
    return (
        <div className="container px-4 mx-auto">
            <HeroSection />
            <ProjectOverview />
            <AboutMe />
            <EducationSection />
        </div>
    );
}
