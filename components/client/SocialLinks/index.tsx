import Link from 'next/link';

import { FiFacebook, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

import './SocialLinks.modules.scss';

export default function SocialLinks() {
    return (
        <div className="fixed bottom-24 left-10 social-links w-10">
            <ul className="space-y-4">
                <li className="size-8">
                    <Link href="https://github.com/devjasim" target="_blank">
                        <FiGithub fontSize={20} />
                    </Link>
                </li>
                <li className="size-8">
                    <Link href="https://linkedin.com/in/devjasim" target="_blank">
                        <FiLinkedin fontSize={20} />
                    </Link>
                </li>
                <li className="size-8 -ml-1">
                    <Link href="https://facebook.com/devjasim" target="_blank">
                        <FiFacebook fontSize={25} />
                    </Link>
                </li>
                <li className="size-8">
                    <Link href="https://twitter.com/dev_jasim" target="_blank">
                        <FiTwitter fontSize={20} />
                    </Link>
                </li>
            </ul>
        </div>
    );
}
