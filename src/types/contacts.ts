export type Contact = {
    id: number;
    userId: string;
    name: string;
    email: string;
    phone: string;
    createdAt: Date;
    updatedAt: Date;
}

export type ContactInfo = {
    userId: string;
    name: string;
    email: string;
    phone: string;
}