import React from 'react';

type InputProps = {
    className?: string;
    containerClassName?: string;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    id?: string;
    label?: string;
} & React.ComponentProps<'input'>

const Input = ({ className, containerClassName, startAdornment, endAdornment, id, label, ...rest }: InputProps) => {

    return (
        <div>
            { label ? <label htmlFor={id}>{label}</label> : '' }
            <div className={`flex items-center py-2 px-3 border border-gray-300 hover:border-blue-b1 rounded-lg
            cursor-pointer mt-1 ${containerClassName}`}
            >
                {startAdornment ? <div>{startAdornment}</div> : ''}
                <input
                    className={`placeholder-gray-300 p-2 block w-full bg-transparent focus:outline-none border-none ${className}`}
                    id={id}
                    {...rest}
                />
                {endAdornment ? <div>{endAdornment}</div> : ''}
            </div>
        </div>
    )
}

export default Input