import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cx(...args: Parameters<typeof clsx>) {
  return twMerge(clsx(...args));
}
