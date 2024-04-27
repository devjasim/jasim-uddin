'use client';
import Link from 'next/link';

import React from 'react';
import { MdStarOutline } from 'react-icons/md';
import { PiGitForkLight } from 'react-icons/pi';

import { LinkList } from '@components/client/SocialLinks';
import TextView from '@components/common/TextView';

const Footer = () => {
    const [repoInfo, setRepoInfo] = React.useState({
        starsCount: 0,
        forksCount: 0,
    });

    React.useEffect(() => {
        const owner = 'devjasim';
        const repo = 'jasim-uddin';
        fetch(`https://api.github.com/repos/${owner}/${repo}`)
            .then(response => response.json())
            .then(data => {
                const starsCount = data.stargazers_count;
                const forksCount = data.forks_count;
                setRepoInfo({ starsCount, forksCount });
            })
            .catch(error => {});
    }, []);

    return (
        <div className="flex p-2 mb-10 items-center text-sm text-text-100 text-light justify-center flex-col">
            <div className="sm:hidden block">
                <LinkList />
            </div>
            <Link href="https://github.com/devjasim/jasim-uddin" target="_blank">
                <TextView.Paragraph text="Designed and built with ❤️ by Jasim Uddin" className="!text-text-100" />
                <div className="flex items-center justify-center gap-4 mt-2">
                    <div className="flex items-center justify-start gap-x-2">
                        <MdStarOutline />
                        <span>{repoInfo.starsCount}</span>
                    </div>
                    <div className="flex items-center justify-start gap-x-2">
                        <PiGitForkLight />
                        <span>{repoInfo.forksCount}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Footer;
