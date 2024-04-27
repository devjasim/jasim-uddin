import Link from 'next/link';

import './VerticalGmail.modules.scss';

export default function VerticalGmail() {
    return (
        <div className="fixed hidden sm:block bottom-24 right-5 md:right-10 vertical-gmail w-10">
            <div className="transform rotate-90 pb-40 text-base font-normal tracking-widest pt-44">
                <a className="hover:text-primary hover:scale-[1.1] transition eas-in-out duration-300" href="mailto:jasimfbd@gmail.com">
                    jasimfbd@gmail.com
                </a>
            </div>
        </div>
    );
}
