import React from 'react';

type SecondaryButtonProps = {
    children: React.ReactNode;
    className?: string;
} & Omit<React.ComponentProps<"button">, "children">

const SecondaryButton = ({ children, className, ...rest }: SecondaryButtonProps) => {

    return (
        <button className={`p-2 bg-transparent rounded hover:bg-blue-50 ${className}`} {...rest}>
            {children}
        </button>
    )
}

export default SecondaryButton