type TicketType = {
    id: string;
    name: string;
    type: "vip" | "premium" | "regular" | "free";
    price: number;
    qty: number;
    total: number;
};

type EventNotificationType = {
    id: string;
    image: string;
    eventName: string;
    startDate: string;
    endDate: string;
    location: string;
    tickets: TicketType[];
};

export const eventNotificationData: EventNotificationType[] = [
    {
        id: "EVT001",
        image: "/cover.png",
        eventName: "The Voice Kids Cambodia Season 3",
        startDate: "2024-06-15",
        endDate: "2024-06-17",
        location: "Phnom Penh REGULAR Center",
        tickets: [
            {
                id: "TKT001",
                name: "VIP Pass",
                type: "vip",
                price: 100,
                qty: 2,
                total: 200,
            },
            {
                id: "TKT002",
                name: "Premium Pass",
                type: "premium",
                price: 75,
                qty: 2,
                total: 150,
            },
            {
                id: "TKT003",
                name: "Regular Pass",
                type: "regular",
                price: 50,
                qty: 1,
                total: 50,
            },
        ],
    },
    {
        id: "EVT002",
        image: "/cover.png",
        eventName: "Cambodia Premier Culinary & Hospitality Expo",
        startDate: "2024-07-20",
        endDate: "2024-07-22",
        location: "Diamond Island Convention Center",
        tickets: [
            {
                id: "TKT004",
                name: "Free Entry",
                type: "free",
                price: 0,
                qty: 10,
                total: 0,
            },
        ],
    },
    {
        id: "EVT003",
        image: "/cover.png",
        eventName: "Cambodia Independence Day Celebration",
        startDate: "2024-11-09",
        endDate: "2024-11-09",
        location: "Independence Monument",
        tickets: [
            {
                id: "TKT005",
                name: "VIP Pass",
                type: "vip",
                price: 120,
                qty: 1,
                total: 120,
            },
            {
                id: "TKT006",
                name: "Free Entry",
                type: "free",
                price: 0,
                qty: 1,
                total: 0,
            },
        ],
    },
    {
        id: "EVT004",
        image: "/cover.png",
        eventName: "Cambodia Sea Festival",
        startDate: "2024-06-28",
        endDate: "2024-07-02",
        location: "Sihanoukville Beach",
        tickets: [
            {
                id: "TKT007",
                name: "Premium Pass",
                type: "premium",
                price: 80,
                qty: 2,
                total: 160,
            },
            {
                id: "TKT008",
                name: "Regular Pass",
                type: "regular",
                price: 40,
                qty: 2,
                total: 80,
            },
        ],
    },
    {
        id: "EVT005",
        image: "/cover.png",
        eventName: "Khmer New Year Celebration",
        startDate: "2024-04-13",
        endDate: "2024-04-15",
        location: "Angkor Wat Temple Grounds",
        tickets: [
            {
                id: "TKT009",
                name: "VIP Pass",
                type: "vip",
                price: 150,
                qty: 2,
                total: 300,
            },
            {
                id: "TKT010",
                name: "Regular Pass",
                type: "regular",
                price: 60,
                qty: 6,
                total: 360,
            },
        ],
    },
    {
        id: "EVT006",
        image: "/cover.png",
        eventName: "Phnom Penh International Film Festival",
        startDate: "2024-09-05",
        endDate: "2024-09-10",
        location: "Legend Cinema",
        tickets: [
            {
                id: "TKT011",
                name: "Premium Pass",
                type: "premium",
                price: 90,
                qty: 3,
                total: 270,
            },
            {
                id: "TKT012",
                name: "Regular Pass",
                type: "regular",
                price: 50,
                qty: 3,
                total: 150,
            },
        ],
    },
    {
        id: "EVT007",
        image: "/cover.png",
        eventName: "Water Festival Boat Racing",
        startDate: "2024-11-16",
        endDate: "2024-11-18",
        location: "Tonle Sap River",
        tickets: [
            {
                id: "TKT013",
                name: "VIP Pass",
                type: "vip",
                price: 200,
                qty: 1,
                total: 200,
            },
            {
                id: "TKT014",
                name: "Free Entry",
                type: "free",
                price: 0,
                qty: 2,
                total: 0,
            },
        ],
    },
    {
        id: "EVT008",
        image: "/cover.png",
        eventName: "Cambodia Digital Tech Summit",
        startDate: "2024-03-10",
        endDate: "2024-03-12",
        location: "Phnom Penh Tech Park",
        tickets: [
            {
                id: "TKT015",
                name: "VIP Pass",
                type: "vip",
                price: 180,
                qty: 2,
                total: 360,
            },
            {
                id: "TKT016",
                name: "Premium Pass",
                type: "premium",
                price: 120,
                qty: 3,
                total: 360,
            },
            {
                id: "TKT017",
                name: "Regular Pass",
                type: "regular",
                price: 80,
                qty: 2,
                total: 160,
            },
        ],
    },
];
