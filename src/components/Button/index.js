import { forwardRef } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = forwardRef(
    (
        {
            to,
            href,
            primary = false,
            outline = false,
            circle,
            small = false,
            large = false,
            onClick,
            icon,
            children,
            ...passProps
        },
        ref,
    ) => {
        let Comp = 'button';
        let props = {
            onClick,
            ...passProps,
        };

        if (to) {
            props.to = to;
            Comp = Link;
        } else if (href) {
            props.href = href;
            Comp = 'a';
        }

        const classes = clsx(styles.wrapper, {
            [styles.primary]: primary,
            [styles.outline]: outline,
            [styles.circle]: circle,
            [styles.small]: small,
            [styles.large]: large,
        });
        return (
            <Comp ref={ref} className={classes} {...props}>
                {icon && <span className="icon">{icon}</span>}
                {children}
            </Comp>
        );
    },
);

export default Button;
