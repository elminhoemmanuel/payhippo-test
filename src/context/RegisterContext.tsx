import { createContext, useState } from 'react';
import { CustomerType, IRegisterContext } from '../interfaces/register';

type RegisterContextProviderProps = {
    children: React.ReactNode;
}

export const RegisterContext = createContext<IRegisterContext | null>(null);

export const RegisterContextProvider = ({ children }: RegisterContextProviderProps) => {

    const [step, setStep] = useState(1);
    const [type, setType] = useState<CustomerType>("sme");

    const incrStep = () => setStep((prev) => prev + 1);
    const decrStep = () => setStep((prev) => prev - 1);
    const handleType = (val: CustomerType) => setType(val);

    return (
        <RegisterContext.Provider value={{ step, incrStep, decrStep, type, handleType }}>
            {children}
        </RegisterContext.Provider>
    )
}