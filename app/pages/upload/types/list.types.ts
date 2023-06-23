import { SetStateAction } from "react";

export interface Tr {
    name: string;
    docket: string;
    entrance: string;
    exit: string;
    lastname: string;
    setEmployee: React.Dispatch<SetStateAction<string>>;
}

export interface ListObjects {
    title: string;
    titlelist: string[];
    items: { name: string, docket: string, entrance: string,
        exit: string, lastname: string, setEmployee: React.Dispatch<SetStateAction<string>>
    }[];
    setEmployee: React.Dispatch<SetStateAction<string>>;
}