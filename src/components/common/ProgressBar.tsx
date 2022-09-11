import React from 'react';

type ProgressBarProps = {
    percentage: 50 | 100;
}

const ProgressBar = ({ percentage }: ProgressBarProps) => {
    return (
        <div className='box-content h-1 relative bg-gray-200 rounded border-none w-3/5'>
            <span style={{width: `${String(percentage)}%`}} className='block h-full rounded-tr-sm rounded-br-sm
                rounded-tl-md rounded-bl-md bg-blue-b1 relative overflow-hidden'
            >
            </span>
        </div>
    )
}

export default ProgressBar