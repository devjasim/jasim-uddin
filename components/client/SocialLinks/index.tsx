import Link from 'next/link';

import { FiFacebook, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

import './SocialLinks.modules.scss';

export const LinkList = () => {
    return (
        <ul className="sm:space-y-4 sm:block flex items-center justify-center mb-6 sm:mb-0 gap-x-4">
            <li className="size-8 sm:block flex items-center justify-center">
                <Link className="hover:text-primary transition ease-in-out duration-200" href="https://github.com/devjasim" target="_blank">
                    <FiGithub fontSize={20} />
                </Link>
            </li>
            <li className="size-8 sm:block flex items-center justify-center">
                <Link className="hover:text-primary transition ease-in-out duration-200" href="https://linkedin.com/in/devjasim" target="_blank">
                    <FiLinkedin fontSize={20} />
                </Link>
            </li>
            <li className="size-8 -ml-1">
                <Link className="hover:text-primary transition ease-in-out duration-200" href="https://facebook.com/devjasim" target="_blank">
                    <FiFacebook fontSize={25} />
                </Link>
            </li>
            <li className="size-8 sm:block flex items-center justify-center">
                <Link className="hover:text-primary transition ease-in-out duration-200" href="https://twitter.com/dev_jasim" target="_blank">
                    <FiTwitter fontSize={20} />
                </Link>
            </li>
        </ul>
    );
};

export default function SocialLinks() {
    return (
        <div className="fixed hidden sm:block bottom-24 left-5 md:left-10 social-links w-10">
            <LinkList />
        </div>
    );
}
