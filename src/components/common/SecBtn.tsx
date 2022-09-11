import React from 'react';

type SecBtnProps = {
    children: React.ReactNode;
    className?: string;
} & Omit<React.ComponentProps<"button">, "children">

const SecBtn = ({ children, className, ...rest }: SecBtnProps) => {

    return (
        <button className={`p-2 bg-transparent rounded hover:bg-blue-50 ${className}`} {...rest}>
            {children}
        </button>
    )
}

export default SecBtn