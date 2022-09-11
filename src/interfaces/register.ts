
export type CustomerType = "sme" | "partner";

export interface IRegisterContext {
    step: number;
    incrStep: ()=>void;
    decrStep: ()=>void;
    type: CustomerType;
    handleType: (val: CustomerType )=>void;
}