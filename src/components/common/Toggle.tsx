import React from 'react';
import { RiToggleLine, RiToggleFill } from "react-icons/ri"

type ToggleProps = {
    active: boolean;
    toggleActive: () => void;
    containerClassName?: string;
    label: string;
}

const Toggle = ({ active, toggleActive, containerClassName, label }: ToggleProps) => {
    return (
        <div className={`flex items-center ${containerClassName}`}>
            <button onClick={()=>toggleActive()} type='button' className='block focus:outline-none border-none mr-3'>
                { active ? <RiToggleLine className='h-8 w-8 text-blue-b1' /> : <RiToggleFill className='h-8 w-8 text-gray-300' /> }
            </button>
            <label>{label}</label>
        </div>
    )
}

export default Toggle