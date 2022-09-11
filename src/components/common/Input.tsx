import React from 'react';

type InputProps = {
    className?: string;
    containerClassName?: string;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    id?: string;
    label?: string;
    errorText?: string;
} & React.ComponentProps<'input'>

const Input = ({ className, containerClassName, startAdornment, endAdornment, id, label, errorText, ...rest }: InputProps) => {

    return (
        <div className={containerClassName}>
            { label ? <label htmlFor={id}>{label}</label> : '' }
            <div className={`flex items-center py-2 px-3 border border-gray-300 hover:border-blue-b1 rounded-lg
            cursor-pointer mt-1`}
            >
                {startAdornment ? <div>{startAdornment}</div> : ''}
                <input
                    className={`placeholder-gray-300 p-2 block w-full bg-transparent focus:outline-none border-none ${className}`}
                    id={id}
                    {...rest}
                />
                {endAdornment ? <div>{endAdornment}</div> : ''}
            </div>
            <p data-testid="error" className='text-red-400 my-2'>{errorText ? errorText : ''}</p>
        </div>
    )
}

export default Input