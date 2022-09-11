import React, { useContext } from 'react';
import { RegisterContext } from '../../context/RegisterContext';
import { IRegisterContext } from '../../interfaces/register';
import ProgressBar from '../common/ProgressBar';
import SecBtn from '../common/SecBtn';
import Back from '../icons/Back';

const AuthNav = () => {

    const { step, decrStep } = useContext(RegisterContext) as IRegisterContext;
    const getPercentage = () => step === 1 ? 50 : 100;

    return (
        <>
            <nav className='flex items-center justify-between mb-2'>
                <img className='block h-12 w-30' src='/images/payhippo_logo.svg' alt='payhippo logo' />
                {
                    step > 1 ? 
                    <SecBtn onClick={()=>decrStep()} className='flex items-center text-blue-b1'>
                        <Back className='h-5 w-5 mr-2' />
                        <p>Back</p>
                    </SecBtn> :
                    ''
                }
            </nav>
            <ProgressBar percentage={getPercentage()} />
        </>
    )
}

export default AuthNav