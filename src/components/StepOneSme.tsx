import React, { useContext, useState, useEffect } from 'react';
import Input from './common/Input';
import { RiPhoneFill } from 'react-icons/ri';
import { MdDialpad } from "react-icons/md"
import PriBtn from './common/PriBtn';
import { RegisterContext } from '../context/RegisterContext';
import { IPhoneValues, IRegisterContext } from '../interfaces/register';

//Start with an initial value of 60 seconds
const TIME_LIMIT = 60

const StepOneSme = () => {

    let timePassed = 0;
    let timeLeft = TIME_LIMIT;
    let timerInterval: NodeJS.Timer;
    const requiredLengths = { phone: 10, otp: 6 };
    const { incrStep, handlePhoneValues, phoneValues } = useContext(RegisterContext) as IRegisterContext;
    const [values, setValues] = useState(phoneValues);
    const [otpSent, setOtpSent] = useState(false);
    const [error, setError] = useState("");
    const [counter, setCounter] = useState(TIME_LIMIT);
    const [isCounting, setIsCounting] = useState(false);

    const startTimer = () =>{
        setIsCounting(true);
        timerInterval = setInterval(()=>{
            //The amount of time passed increments by one
            timePassed = timePassed += 1;
            timeLeft = TIME_LIMIT - timePassed;
            setCounter(timeLeft);
        }, 1000);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        canProceed(incrStep, handlePhoneValues);
    }

    const handleOtpSent = () => setOtpSent(true);

    const canProceed = (val: ()=>void, setVal: (data: IPhoneValues)=>void) =>{
        setError("")
        if(getValidity(values)){
            val();
            setVal(values);
        }else{
            setError("Please fill in all input fields with the required data");
        }
    }

    const getValidity = (val: IPhoneValues) =>{
        return val.phone && val.otp && val.phone.length === requiredLengths.phone && val.otp.length === requiredLengths.otp;
    }

    const checkInputError = (val: string) =>{
        switch (val) {
            case "phone":
                return error && values.phone.length !== requiredLengths.phone;
            case "otp":
                return error && values.otp.length !== requiredLengths.otp;
        
        }
    }

    const handleOtpBtn = () =>{
        startTimer();
        handleOtpSent();
    }

    useEffect(() => {
      if(counter < 1){
        setIsCounting(false);
        clearInterval(timerInterval);
        timeLeft = TIME_LIMIT;
        timePassed = 0;
        return setCounter(TIME_LIMIT)
      }
    })
    

    return (
        <div className='py-4 border-t border-gray-300 w-full md:w-11/12 lg:w-3/4'>
            <form className='' onSubmit={handleSubmit}>
                <Input
                    id="phone"
                    name='phone'
                    value={values.phone}
                    onChange={handleInputChange}
                    label='Phone Number'
                    placeholder='8134567890'
                    containerClassName='mb-12'
                    type="text"
                    autoComplete="off"
                    errorText={ checkInputError("phone") ? "Phone number is required and must be up to 10 digits" : "" }
                    startAdornment={
                        <div className='flex items-center'><RiPhoneFill className='w-6 h-6 text-skyblue-s2 mr-2' /><p>+234</p></div>
                    }
                />
                <div className='grid gap-2 md:gap-6 grid-cols-12 mb-6'>
                    <div className='col-span-8'>
                        <Input
                            id="otp"
                            name='otp'
                            value={values.otp}
                            onChange={handleInputChange}
                            placeholder='OTP Code'
                            containerClassName='mb-2'
                            type="text"
                            autoComplete="off"
                            errorText={ checkInputError("otp") ? "OTP is required and must be up to 6 digits" : "" }
                            startAdornment={
                                <MdDialpad className='w-6 h-6 text-skyblue-s2 mr-2' />
                            }
                        />
                    </div>
                    <PriBtn disabled={isCounting} style={{height: "3.65rem"}} onClick={()=>handleOtpBtn()} className='block w-full col-span-4' type='button' >
                        { isCounting ? counter : "Send OTP" }
                    </PriBtn>
                </div>

                <PriBtn disabled={!otpSent} className='block w-full my-3 py-4' type='submit' >Continue</PriBtn>
            </form>
        </div>
    )
}

export default StepOneSme