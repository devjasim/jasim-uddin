'use client';
import { cvaCnMerge } from '@library/functions';
import React from 'react';

const TextView = () => {
    return null;
};

type TextProps = {
    text: React.ReactElement | React.ReactNode;
    size?: 'md' | 'lg' | 'xl' | 'sm' | 'xs' | '2xl' | 'base';
    className?: string;
};

TextView.HeadingOne = ({ text, size = 'base', className = '' }: TextProps) => (
    <h1 className={cvaCnMerge(`text-${size} dark:text-text text-background ${className}`)}>{text}</h1>
);

TextView.HeadingTwo = ({ text, size = 'base', className = '' }: TextProps) => (
    <h2 className={cvaCnMerge(`text-${size} dark:text-text text-background ${className}`)}>{text}</h2>
);

TextView.HeadingThree = ({ text, size = 'base', className = '' }: TextProps) => (
    <h3 className={cvaCnMerge(`text-${size} dark:text-text text-background ${className}`)}>{text}</h3>
);

TextView.Paragraph = ({ text, size = 'base', className = '' }: TextProps) => (
    <p className={cvaCnMerge(`text-${size} dark:text-text text-background ${className}`)}>{text}</p>
);

export default TextView;
