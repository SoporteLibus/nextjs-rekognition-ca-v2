import { SetStateAction } from "react";

export interface Tr {
    name: string;
    docket: string;
    lastname: string;
    setEmployee: React.Dispatch<SetStateAction<any[]>>;
    setShowModalExtras: React.Dispatch<SetStateAction<boolean>>;
    setShowModalNormal: React.Dispatch<SetStateAction<boolean>>;
    setShowModalLicencia: React.Dispatch<SetStateAction<boolean>>;
}

export interface ListObjects {
    title: string;
    titlelist: string[];
    items: {
        name: string, docket: string,
        lastname: string, setEmployee: React.Dispatch<SetStateAction<any[]>>,
        setShowModalExtras: React.Dispatch<SetStateAction<boolean>>,
        setShowModalNormal: React.Dispatch<SetStateAction<boolean>>,
        setShowModalLicencia: React.Dispatch<SetStateAction<boolean>>
    }[];
    setEmployee: React.Dispatch<SetStateAction<string[]>>;
    setShowModalExtras: React.Dispatch<SetStateAction<boolean>>;
    setShowModalNormal: React.Dispatch<SetStateAction<boolean>>;
    setShowModalLicencia: React.Dispatch<SetStateAction<boolean>>;
}