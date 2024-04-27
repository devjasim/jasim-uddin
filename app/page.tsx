'use client';

import AboutMe from '@components/client/AboutMe';
import ContactComponent from '@components/client/contact';
import EducationSection from '@components/client/EducationSection';
import ExperienceSection from '@components/client/ExperienceSection';
import HeroSection from '@components/client/HeroSection';
import ProjectOverview from '@components/client/ProjectOverview';
import ProjectsSection from '@components/client/ProjectsSection';

export default function Home() {
    return (
        <div className="container px-4 mx-auto">
            <HeroSection />
            <ProjectOverview />
            <AboutMe />
            <EducationSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactComponent />
        </div>
    );
}
