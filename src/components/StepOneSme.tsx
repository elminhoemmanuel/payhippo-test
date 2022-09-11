import React, { useContext } from 'react';
import Input from './common/Input';
import { RiPhoneFill } from 'react-icons/ri';
import { MdDialpad } from "react-icons/md"
import PriBtn from './common/PriBtn';
import { RegisterContext } from '../context/RegisterContext';
import { IRegisterContext } from '../interfaces/register';

const StepOneSme = () => {

    const { incrStep } = useContext(RegisterContext) as IRegisterContext;
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        incrStep();
    }

    return (
        <div className='py-4 border-t border-gray-300 w-full md:w-11/12 lg:w-3/4'>
            <form className='' onSubmit={handleSubmit}>
                <Input
                    id="phone"
                    label='Phone Number'
                    placeholder='8134567890'
                    containerClassName='mb-12'
                    type="text"
                    startAdornment={
                        <div className='flex items-center'><RiPhoneFill className='w-6 h-6 text-skyblue-s2 mr-2' /><p>+234</p></div>
                    }
                />
                <div className='grid gap-2 md:gap-6 grid-cols-12 mb-6'>
                    <div className='col-span-8'>
                        <Input
                            id="otp"
                            placeholder='OTP Code'
                            containerClassName='mb-2'
                            type="text"
                            startAdornment={
                                <MdDialpad className='w-6 h-6 text-skyblue-s2 mr-2' />
                            }
                        />
                    </div>
                    <PriBtn className='block w-full mb-2 col-span-4' type='button' >Send OTP</PriBtn>
                </div>

                <PriBtn disabled className='block w-full my-3 py-4' type='submit' >Continue</PriBtn>
            </form>
        </div>
    )
}

export default StepOneSme