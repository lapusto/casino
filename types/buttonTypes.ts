import { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    size: 's' | 'm'  | 'l';
    isActive?: boolean;
    filled?: boolean;
    onClick?: () => void
}