import React, { useContext } from 'react';
import SwitchTab from './SwitchTab';
import { RegisterContext } from '../context/RegisterContext';
import { IRegisterContext } from '../interfaces/register';
import StepOneSme from './StepOneSme';
import StepOnePartner from './StepOnePartner';


const RegisterStepOne = () => {

    const { type, handleType } = useContext(RegisterContext) as IRegisterContext;

    return (
        <div className='py-6'>
            <h1 className='font-bold text-4xl mb-1'>Create an account</h1>
            <p className='mb-6'>Let's get started by verifying your phone number.</p>

            <SwitchTab active={type} setActive={handleType} />

            { type === "sme" ? <StepOneSme /> : '' }
            { type === "partner" ? <StepOnePartner /> : '' }
        </div>
    )
}

export default RegisterStepOne