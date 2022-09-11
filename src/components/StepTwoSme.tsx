import React, { useState, useContext } from 'react';
import Input from './common/Input';
import { RiShieldUserFill, RiBuilding4Fill, RiCalendarFill, RiMailFill, RiChat1Fill, RiUserSharedFill } from 'react-icons/ri';
import Select from './common/Select';
import Toggle from './common/Toggle';
import PriBtn from './common/PriBtn';
import { RegisterContext } from '../context/RegisterContext';
import { IDetails, IPhoneValues, IRegisterContext } from '../interfaces/register';

const StepTwoSme = () => {

    const sources = ['Facebook', 'Instagram', 'Twitter', 'Website', 'Billboard', 'Friend', 'Other']
    const [hasReferral, setHasReferral] = useState(false);
    const { details, handleDetails, resetStep } = useContext(RegisterContext) as IRegisterContext;
    const [values, setValues] = useState<IDetails>(details);
    const [error, setError] = useState("");

    const handleChangeReferral = () => setHasReferral(!hasReferral);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        canProceed(handleDetails);
    }

    const canProceed = (setVal: (data: IDetails)=>void) =>{
        setError("")
        if(getValidity(values)){
            setVal(values);
            alert("You have successfully been regsitered");
            resetStep();
        }else{
            setError("Please fill in all input fields with the required data");
        }
    }

    const getValidity = (val: IDetails) =>{
        return val.firstName && val.lastName && val.businessName && val.dob && val.email && val.source;
    }

    const checkInputError = (val: string) =>{
        switch (val) {
            case "firstName":
                return error && !values.firstName;
            case "lastName":
                return error && !values.lastName;
            case "businessName":
                return error && !values.businessName;
            case "dob":
                return error && !values.dob;
            case "email":
                return error && !values.email;
            case "source":
                return error && !values.source;
        
        }
    }

    return (
        <div className='py-4 border-t border-gray-300 w-full md:w-11/12 lg:w-3/4'>
            <form className='' onSubmit={handleSubmit}>
                <div className='grid gap-2 md:gap-6 grid-cols-1 lg:grid-cols-2 py-3'>
                    <Input
                        id="firstName"
                        name='firstName'
                        value={values.firstName}
                        onChange={handleInputChange}
                        label='First Name'
                        placeholder='John'
                        containerClassName=''
                        type="text"
                        errorText={ checkInputError("firstName") ? "First Name is required" : "" }
                        autoComplete="off"
                        startAdornment={
                            <RiShieldUserFill className='w-6 h-6 text-skyblue-s2' />
                        }
                    />
                    <Input
                        id="lastName"
                        name='lastName'
                        value={values.lastName}
                        onChange={handleInputChange}
                        label='Last Name'
                        placeholder='Wick'
                        containerClassName=''
                        type="text"
                        errorText={ checkInputError("lastName") ? "Last Name is required" : "" }
                        autoComplete="off"
                        startAdornment={
                            <RiShieldUserFill className='w-6 h-6 text-skyblue-s2' />
                        }
                    />

                    <Input
                        id="businessName"
                        name='businessName'
                        value={values.businessName}
                        onChange={handleInputChange}
                        label='Business Name'
                        placeholder='Biz Enterprises'
                        containerClassName=''
                        type="text"
                        errorText={ checkInputError("businessName") ? "Business Name is required" : "" }
                        autoComplete="off"
                        startAdornment={
                            <RiBuilding4Fill className='w-6 h-6 text-skyblue-s2' />
                        }
                    />

                    <Input
                        id="dob"
                        name='dob'
                        value={values.dob}
                        onChange={handleInputChange}
                        label='Date of birth'
                        containerClassName=''
                        type="date"
                        errorText={ checkInputError("dob") ? "Date of birth is required" : "" }
                        autoComplete="off"
                        startAdornment={
                            <RiCalendarFill className='w-6 h-6 text-skyblue-s2' />
                        }
                    />
                    <Input
                        id="email"
                        name='email'
                        value={values.email}
                        onChange={handleInputChange}
                        label='Email'
                        containerClassName=''
                        type="email"
                        errorText={ checkInputError("email") ? "Email is required" : "" }
                        autoComplete="off"
                        startAdornment={
                            <RiMailFill className='w-6 h-6 text-skyblue-s2' />
                        }
                    />

                    <Select
                        id="source"
                        name='source'
                        value={values.source}
                        onChange={handleInputChange}
                        label='Where did you hear about us?'
                        placeholder='Select an option'
                        options={sources}
                        errorText={ checkInputError("source") ? "Referral Source is required" : "" }
                        autoComplete="off"
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
                                name='referral'
                                value={values.referral}
                                onChange={handleInputChange}
                                label='Referral Code (optional)'
                                placeholder='645GHX'
                                containerClassName=''
                                type="text"
                                autoComplete="off"
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