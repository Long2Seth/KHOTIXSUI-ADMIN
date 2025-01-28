export type TicketType = {
    id: string;
    ticketTitle: string;
    type: string;
    price: number;
    capacity: number;
    isPublish: string;
    isDisplay: string;
    isSoldOut: string;
}


export type EventType = {
    id: string;
    createdBy: string;
    createdDate: string;
    eventTitle: string;
    startedDate: string;
    endedDate: string;
    location: string;
    isPublish: boolean;
    thumbnail: string;
    description: string;
    eventCategory: string;
    ticket: TicketType[];
}