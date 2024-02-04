import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cvaCnMerge(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
