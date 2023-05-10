export interface CardList {
    icon: React.ReactNode;
    text: string;
    numbers: number;
}

export interface CardItems {
    items: { icon: React.ReactNode; text: string; numbers: number }[];
}