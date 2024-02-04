'use client';

import { cvaCnMerge } from '@library/functions';

type ButtonProps = {
    icon?: React.ReactElement | React.ReactNode;
    iconPosition?: 'left' | 'right';
    label?: string;
    htmlType?: 'button' | 'submit';
    className?: string;
    variant?: 'outline' | 'primary' | 'secondary';
    [key: string]: any;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
};

export default function Button({ variant, icon, size, label, htmlType = 'button', className = '', iconPosition, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className={cvaCnMerge(
                `text-text custom-button transition-colors py-2 px-6 border border-transparent bg-background dark:bg-primary dark:text-secondary rounded-md ${className}`,
                {
                    'flex gap-x-2 items-center justify-center': icon,
                    'dark:bg-background border-primary bg-white dark:text-primary text-primary outline': variant === 'outline',
                    'py-3 px-8 font-medium': size === 'md',
                    'py-1': size === 'xs',
                    'py-4 px-8': size === 'lg',
                },
            )}
            type={htmlType}>
            {icon && iconPosition === 'left' && <span className="block">{icon}</span>}
            {label && label}
            {icon && iconPosition !== 'left' && <span>{icon}</span>}
        </button>
    );
}
