import React from 'react';
import { CustomerType } from '../interfaces/register';

type SwitchTabProps = {
    active: CustomerType;
    setActive: (val: CustomerType) => void;
}

const SwitchTab = ({ active, setActive }: SwitchTabProps) => {
    return (
        <div className='flex items-center py-3'>
            <button
                onClick={()=>setActive("sme")}
                className={`text-md focus:outline-none pr-4 ${active === "sme" ? "text-blue-b1" : "text-gray-400"}`}
            >
                SMEs
            </button>
            <button
                onClick={()=>setActive("partner")}
                className={`text-md focus:outline-none px-4 ${active === "partner" ? "text-blue-b1" : "text-gray-400"}`}
            >
                Partner
            </button>
        </div>
    )
}

export default SwitchTab