import React, { useState } from 'react';
import Input from './common/Input';
import { RiShieldUserFill, RiBuilding4Fill, RiCalendarFill, RiMailFill, RiChat1Fill, RiUserSharedFill } from 'react-icons/ri';
import Select from './common/Select';
import Toggle from './common/Toggle';
import PriBtn from './common/PriBtn';

const StepTwoSme = () => {

    const sources = ['Facebook', 'Instagram', 'Twitter', 'Website', 'Billboard', 'Friend', 'Other']
    const [hasReferral, setHasReferral] = useState(false);

    const handleChangeReferral = () => setHasReferral(!hasReferral);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("You have successfully been regsitered");
    }

    return (
        <div className='py-4 border-t border-gray-300 w-full md:w-11/12 lg:w-3/4'>
            <form className='' onSubmit={handleSubmit}>
                <div className='grid gap-2 md:gap-6 grid-cols-1 lg:grid-cols-2 py-3'>
                    <Input
                        id="firstName"
                        label='First Name'
                        placeholder='John'
                        containerClassName=''
                        type="text"
                        startAdornment={
                            <RiShieldUserFill className='w-6 h-6 text-skyblue-s2' />
                        }
                    />
                    <Input
                        id="lastName"
                        label='Last Name'
                        placeholder='Wick'
                        containerClassName=''
                        type="text"
                        startAdornment={
                            <RiShieldUserFill className='w-6 h-6 text-skyblue-s2' />
                        }
                    />

                    <Input
                        id="businessName"
                        label='Business Name'
                        placeholder='Biz Enterprises'
                        containerClassName=''
                        type="text"
                        startAdornment={
                            <RiBuilding4Fill className='w-6 h-6 text-skyblue-s2' />
                        }
                    />

                    <Input
                        id="dob"
                        label='Date of birth'
                        containerClassName=''
                        type="date"
                        startAdornment={
                            <RiCalendarFill className='w-6 h-6 text-skyblue-s2' />
                        }
                    />
                    <Input
                        id="email"
                        label='Email'
                        containerClassName=''
                        type="email"
                        startAdornment={
                            <RiMailFill className='w-6 h-6 text-skyblue-s2' />
                        }
                    />

                    <Select
                        id="email"
                        label='Where did you hear about us?'
                        placeholder='Select an option'
                        options={sources}
                        startAdornment={
                            <RiChat1Fill className='w-6 h-6 text-skyblue-s2' />
                        }
                    />
                </div>

                <div className='pb-3'>
                    <Toggle containerClassName='my-3' label='Referral code?' active={hasReferral} toggleActive={handleChangeReferral} />
                    {
                        hasReferral ?
                            <Input
                                id="referral"
                                label='Referral Code (optional)'
                                placeholder='645GHX'
                                containerClassName=''
                                type="text"
                                startAdornment={
                                    <RiUserSharedFill className='w-6 h-6 text-skyblue-s2' />
                                }
                            /> : ''
                    }
                </div>

                <PriBtn className='block w-full my-3' type='submit' >Finish</PriBtn>
            </form>
        </div>
    )
}

export default StepTwoSme