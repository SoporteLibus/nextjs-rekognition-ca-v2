export interface Tr {
    name: string;
    docket: string;
    entrance: string;
    exit: string;
    lastname: string;
    status: string;
}

export interface Tr2 {
    name: string;
    docket: string;
    entrance: string;
    entrance_rest:string
    exit_rest:string
    exit: string;
    lastname: string;
    turn:string;
    status: string;
}

export interface ListObjects {
    title: string;
    titlelist: string[];
    items?: { name: string, docket: string, entrance: string,
    exit: string, lastname: string, status: string }[];
}