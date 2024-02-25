'use client';

import React from 'react';

import Button from '@components/common/Button';
import TextView from '@components/common/TextView';

const ContactComponent = () => {
    return (
        <section className="mb-24 md:mb-40" id="contact">
            <div className="text-center max-w-2xl mx-auto">
                <TextView.HeadingOne className="lg:text-3xl md:text-3xl text-2xl text-accent font-bold" text="Get In Touch" />
                <TextView.Paragraph
                    className="text-sm mt-4 !text-text-100"
                    text="Got any questions or just wanna chat? My inbox is always open. I'll hit you back real quick—I'm always checking my email a few times a day anyway!"
                />
                <a href="mailto:jasimfbd@gmail.com" className="mt-10 block max-w-fit mx-auto">
                    <Button variant="outline" label="Say Hi" />
                </a>
            </div>
        </section>
    );
};

export default ContactComponent;
