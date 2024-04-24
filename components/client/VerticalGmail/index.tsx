import Link from 'next/link';

import { FiFacebook, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

import './VerticalGmail.modules.scss';

export default function VerticalGmail() {
    return (
        <div className="fixed bottom-24 right-5 md:right-10 vertical-gmail w-10">
            <div className="transform rotate-90 pb-36 text-lg tracking-wider pt-40">jasimfbd@gmail.com</div>
        </div>
    );
}
