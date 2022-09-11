import React from 'react';

type PriBtnProps = {
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
} & Omit<React.ComponentProps<"button">, "children">

const PriBtn = ({ children, className, disabled, ...rest }: PriBtnProps) => {

    return (
        <button disabled={disabled} className={`p-3 bg-blue-b1 hover:bg-blue-b2 text-white rounded-lg ${className} ${disabled ? "bg-gray-400 hover:bg-gray-400" : ""}`} {...rest}>
            {children}
        </button>
    )
}

export default PriBtn