import React, { useContext } from 'react';
import AuthLayout from '../components/layout/AuthLayout';
import RegisterStepOne from '../components/RegisterStepOne';
import RegisterStepTwo from '../components/RegisterStepTwo';
import { RegisterContext } from '../context/RegisterContext';
import { IRegisterContext } from '../interfaces/register';

const Register = () => {

    const { step } = useContext(RegisterContext) as IRegisterContext;
    const getStep = () => {
        switch (step) {
            case 1:
                return <RegisterStepOne />;
        
            case 2:
                return <RegisterStepTwo />;
        
            default:
                return <RegisterStepOne />;
        }
    }

    return (
        <AuthLayout>
            {getStep()}
        </AuthLayout>
    )
}

export default Register