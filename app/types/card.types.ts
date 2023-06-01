export interface CardList {
    icon: React.ReactNode;
    text: string;
    numbers: number;
    link: string
}

export interface CardItems {
    items: { icon: React.ReactNode; text: string; numbers: number, link: string }[];
}