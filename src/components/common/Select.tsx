import React from 'react';

type SelectProps = {
    className?: string;
    startAdornment?: React.ReactNode;
    containerClassName?: string;
    id?: string;
    label?: string;
    options: string[];
    errorText?: string;
} & React.ComponentProps<'select'>

const Select = ({ className, startAdornment, id, label, options, containerClassName, errorText, ...rest }: SelectProps) => {

    return (
        <div>
            { label ? <label htmlFor={id}>{label}</label> : '' }
            <div className={`flex items-center py-2 px-3 border border-gray-300 hover:border-blue-b1 rounded-lg
                cursor-pointer mt-1 ${containerClassName}`}
            >
                {startAdornment ? <div>{startAdornment}</div> : ''}
                <select className={`p-2 bg-transparent focus:outline-none border-none block placeholder-gray-300 w-full ${className}`}
                    id={id}
                    {...rest}
                >
                    {
                        options?.map((item) => (
                            <option key={item} value={item} >{item}</option>
                        ))
                    }
                </select>
            </div>
            <p className='text-red-400 my-2'>{errorText ? errorText : ''}</p>
        </div>
    )
}

export default Select