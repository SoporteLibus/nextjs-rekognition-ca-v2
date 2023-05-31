export interface Tr {
    name: string
    docket: string
    lastname: string
    status: string
}

export interface ListObjects {
    title: string
    title2: string
    titlelist: string[]
    items: { name: string, docket: string, lastname: string, status: string }[];
    items2: { name: string, lastname: string, image: string, status: string }[]
}