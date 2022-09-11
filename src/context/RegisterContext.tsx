import { createContext, useState } from 'react';
import { CustomerType, IDetails, IPhoneValues, IRegisterContext } from '../interfaces/register';

type RegisterContextProviderProps = {
    children: React.ReactNode;
}

export const RegisterContext = createContext<IRegisterContext>({} as IRegisterContext);

export const RegisterContextProvider = ({ children }: RegisterContextProviderProps) => {

    const initialDetails = {
        firstName: "",
        lastName: "",
        businessName: "",
        dob: "",
        email: "",
        source: "",
        referral: "",
    }
    const [step, setStep] = useState(1);
    const [type, setType] = useState<CustomerType>("sme");
    const [phoneValues, setPhoneValues] = useState<IPhoneValues>({ phone: "", otp: "" });
    const [details, setDetails] = useState<IDetails>(initialDetails);

    const incrStep = () => setStep((prev) => prev + 1);
    const decrStep = () => setStep((prev) => prev - 1);
    const resetStep = () => {
        setPhoneValues({ phone: "", otp: "" });
        setDetails(initialDetails);
        setStep(1);
    };
    const handleType = (val: CustomerType) => setType(val);
    const handlePhoneValues = (val: IPhoneValues) => setPhoneValues(val);
    const handleDetails = (val: IDetails) => setDetails(val);

    return (
        <RegisterContext.Provider
            value={{
                step,
                incrStep,
                decrStep,
                type,
                handleType,
                phoneValues,
                handlePhoneValues,
                details,
                handleDetails,
                resetStep,
            }}
        >
            {children}
        </RegisterContext.Provider>
    )
}