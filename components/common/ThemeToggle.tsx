'use client';

import { useTheme } from 'next-themes';

import React from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

import Button from '@components/common/Button';

type Theme = 'light' | 'dark';

function ThemeToggle() {
    const [mounted, setMounted] = React.useState(false);
    const { theme, setTheme } = useTheme();

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="w-12"></div>;

    return (
        <Button
            variant="outline"
            icon={theme === 'light' ? <MdDarkMode fontSize={20} /> : <MdLightMode fontSize={20} />}
            htmlType="button"
            className="px-4"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
    );
}

export default ThemeToggle;
