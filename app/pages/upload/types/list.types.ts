import { SetStateAction } from "react";

export interface Tr {
    name: string;
    docket: string;
    lastname: string;
    setEmployee: React.Dispatch<SetStateAction<any[]>>;
}

export interface ListObjects {
    title: string;
    titlelist: string[];
    items: {
        name: string, docket: string,
        lastname: string, setEmployee: React.Dispatch<SetStateAction<any[]>>
    }[];
    setEmployee: React.Dispatch<SetStateAction<string[]>>;
}