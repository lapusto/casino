import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TypographyProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>  {
    children: ReactNode,
    size?: 's' | 'm' | 'l',
    tag?: "h2" | "h3",
    direction?: "ltr" | "rtl"
}