
export type CustomerType = "sme" | "partner";

export interface IPhoneValues {
    phone: string;
    otp: string;
}

export interface IDetails {
    firstName: string;
    lastName: string;
    businessName: string;
    dob: string;
    email: string;
    source: string;
    referral?: string;
}
export interface IRegisterContext {
    step: number;
    incrStep: ()=>void;
    decrStep: ()=>void;
    resetStep: ()=>void;
    type: CustomerType;
    handleType: (val: CustomerType )=>void;
    phoneValues: IPhoneValues;
    handlePhoneValues: (val: IPhoneValues )=>void;
    details: IDetails;
    handleDetails: (val: IDetails)=>void;
}