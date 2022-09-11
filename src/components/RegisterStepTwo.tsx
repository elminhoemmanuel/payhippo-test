import React, { useContext } from 'react';
import { RegisterContext } from '../context/RegisterContext';
import { IRegisterContext } from '../interfaces/register';
import StepTwoSme from './StepTwoSme';
import StepTwoPartner from './StepTwoPartner';


const RegisterStepTwo = () => {

    const { type } = useContext(RegisterContext) as IRegisterContext;

    return (
        <div className='py-6'>
            <h1 className='font-bold text-4xl mb-1'>Create an account</h1>
            <p className='mb-6'>Finish off by adding more details to your account.</p>

            { type === "sme" ? <StepTwoSme /> : '' }
            { type === "partner" ? <StepTwoPartner /> : '' }
        </div>
    )
}

export default RegisterStepTwo