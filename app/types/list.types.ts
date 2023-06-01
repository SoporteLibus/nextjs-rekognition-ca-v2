export interface Tr {
    name: string
    docket: string
    lastname: string
    status: string
}

export interface ListObjects {
    title: string
    titlelist: string[]
    items: { name: string, docket: string, lastname: string, status: string }[];
}