import { TypographyProps } from '../../../types/typographyTypes';
import styles from "./Typography.module.scss";
import cn from "classnames";
import React from 'react';

const Typography = ({
    children,
    size,
    className,
    direction,
    ...props
}: TypographyProps): JSX.Element => {
    return <p
        className={cn(styles.typography, className, {
            [styles.s]: size === "s",
            [styles.m]: size === "m",
            [styles.l]: size === "l",
            [styles.ltr]: direction === "ltr",
            [styles.rtl]: direction === "rtl",
        })}
        {...props}
    >
        {children}
    </p>

}


export default Typography