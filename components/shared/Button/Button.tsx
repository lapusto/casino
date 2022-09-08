import { ButtonProps } from '../../../types/buttonTypes';
import styles from "./Button.module.scss";
import cn from "classnames"
import React from 'react';

const Button = ({
    children,
    size,
    className,
    isActive,
    filled,
    ...props
}: ButtonProps): JSX.Element => (
    <button
        className={cn(styles.button, className, {
            [styles.s]: size === "s",
            [styles.m]: size === "m",
            [styles.l]: size === "l",
            [styles.active]: isActive
        })}
        {...props}
    >
        {children}
    </button>
)

export default Button