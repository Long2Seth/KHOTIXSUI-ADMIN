export type OrderData = {
    id: string;
    image: string;
    eventName: string;
    startDate: string;
    endDate: string;
    location: string;
    qty: number;
    price: number;
    ticketType: string;
    status: 'publish' | 'unpublish';
}

export const orderData: OrderData[] = [
    {
        id: "EVT001",
        image: "/cover.png",
        eventName: "The Voice Kids Cambodia Season 3",
        startDate: "2024-06-15",
        endDate: "2024-06-17",
        location: "Phnom Penh REGULAR Center",
        qty: 5,
        price: 50.00,
        ticketType: "VIP",
        status: "publish"
    },
    {
        id: "EVT002",
        image: "/cover.png",
        eventName: "Cambodia Premier Culinary & Hospitality Expo",
        startDate: "2024-07-20",
        endDate: "2024-07-22",
        location: "Diamond Island Convention Center",
        qty: 10,
        price: 35.00,
        ticketType: "REGULAR",
        status: "publish"
    },
    {
        id: "EVT003",
        image: "/cover.png",
        eventName: "Cambodia Independence Day Celebration",
        startDate: "2024-11-09",
        endDate: "2024-11-09",
        location: "Independence Monument",
        qty: 2,
        price: 25.00,
        ticketType: "PREMIUM",
        status: "unpublish"
    },
    {
        id: "EVT004",
        image: "/cover.png",
        eventName: "Cambodia Sea Festival",
        startDate: "2024-06-28",
        endDate: "2024-07-02",
        location: "Sihanoukville Beach",
        qty: 4,
        price: 40.00,
        ticketType: "PREMIUM",
        status: "publish"
    },
    {
        id: "EVT005",
        image: "/cover.png",
        eventName: "Angkor Wat International Half Marathon",
        startDate: "2024-12-01",
        endDate: "2024-12-01",
        location: "Angkor Archaeological Park",
        qty: 3,
        price: 75.00,
        ticketType: "VIP",
        status: "publish"
    },
    {
        id: "EVT006",
        image: "/cover.png",
        eventName: "Cambodia Tech Innovation Summit",
        startDate: "2024-08-15",
        endDate: "2024-08-17",
        location: "Phnom Penh Tech Park",
        qty: 6,
        price: 100.00,
        ticketType: "REGULAR",
        status: "publish"
    },
    {
        id: "EVT007",
        image: "/cover.png",
        eventName: "Cambodian International Film Festival",
        startDate: "2024-09-10",
        endDate: "2024-09-15",
        location: "Major Cineplex Phnom Penh",
        qty: 8,
        price: 0,
        ticketType: "FREE",
        status: "publish"
    },
    {
        id: "EVT008",
        image: "/cover.png",
        eventName: "Cambodian Music Awards",
        startDate: "2024-10-05",
        endDate: "2024-10-05",
        location: "Koh Pich Theatre",
        qty: 4,
        price: 120.00,
        ticketType: "VIP",
        status: "unpublish"
    },
    {
        id: "EVT009",
        image: "/cover.png",
        eventName: "Cambodia Fashion Week",
        startDate: "2024-07-05",
        endDate: "2024-07-08",
        location: "Sofitel Phnom Penh Phokeethra",
        qty: 7,
        price: 80.00,
        ticketType: "PREMIUM",
        status: "publish"
    },
    {
        id: "EVT010",
        image: "/cover.png",
        eventName: "Water Festival Boat Races",
        startDate: "2024-11-14",
        endDate: "2024-11-16",
        location: "Tonle Sap River",
        qty: 12,
        price: 20.00,
        ticketType: "PREMIUM",
        status: "publish"
    },
    {
        id: "EVT011",
        image: "/cover.png",
        eventName: "Cambodian International Jazz Festival",
        startDate: "2024-08-22",
        endDate: "2024-08-24",
        location: "Battambang Arts Center",
        qty: 5,
        price: 0,
        ticketType: "FREE",
        status: "publish"
    },
    {
        id: "EVT012",
        image: "/cover.png",
        eventName: "Cambodia Startup Pitch Competition",
        startDate: "2024-09-20",
        endDate: "2024-09-21",
        location: "Co-working Space Phnom Penh",
        qty: 3,
        price: 0,
        ticketType: "FREE",
        status: "publish"
    },
    {
        id: "EVT013",
        image: "/cover.png",
        eventName: "Khmer Literature Festival",
        startDate: "2024-06-10",
        endDate: "2024-06-12",
        location: "National Library",
        qty: 6,
        price: 0,
        ticketType: "REGULAR",
        status: "unpublish"
    },
    {
        id: "EVT014",
        image: "/cover.png",
        eventName: "Cambodia Craft Beer Festival",
        startDate: "2024-07-30",
        endDate: "2024-07-31",
        location: "Street 240, Phnom Penh",
        qty: 8,
        price: 45.00,
        ticketType: "REGULAR",
        status: "publish"
    },
    {
        id: "EVT015",
        image: "/cover.png",
        eventName: "Khmer Traditional Dance Showcase",
        startDate: "2024-10-20",
        endDate: "2024-10-20",
        location: "Chaktomuk Theatre",
        qty: 4,
        price: 40.00,
        ticketType: "REGULAR",
        status: "publish"
    },
    {
        id: "EVT016",
        image: "/cover.png",
        eventName: "International Photography Exhibition",
        startDate: "2024-09-05",
        endDate: "2024-09-09",
        location: "Siem Reap Art Gallery",
        qty: 5,
        price: 35.00,
        ticketType: "VIP",
        status: "publish"
    },
    {
        id: "EVT017",
        image: "/cover.png",
        eventName: "Cambodian Street Food Festival",
        startDate: "2024-08-10",
        endDate: "2024-08-12",
        location: "Olympic Stadium",
        qty: 10,
        price: 25.00,
        ticketType: "PREMIUM",
        status: "publish"
    },
    {
        id: "EVT018",
        image: "/cover.png",
        eventName: "Sustainable Tourism Conference",
        startDate: "2024-10-15",
        endDate: "2024-10-17",
        location: "Rosewood Phnom Penh",
        qty: 6,
        price: 150.00,
        ticketType: "PREMIUM",
        status: "unpublish"
    },
    {
        id: "EVT019",
        image: "/cover.png",
        eventName: "Cambodia International Marathon",
        startDate: "2024-12-15",
        endDate: "2024-12-15",
        location: "Phnom Penh City",
        qty: 7,
        price: 0,
        ticketType: "FREE",
        status: "publish"
    },
    {
        id: "EVT020",
        image: "/cover.png",
        eventName: "Contemporary Cambodian Art Festival",
        startDate: "2024-11-01",
        endDate: "2024-11-05",
        location: "Royal University of Fine Arts",
        qty: 5,
        price: 0,
        ticketType: "FREE",
        status: "publish"
    },
    {
        id: "EVT021",
        image: "/cover.png",
        eventName: "Cambodia Science and Innovation Expo",
        startDate: "2024-07-15",
        endDate: "2024-07-17",
        location: "Institute of Technology of Cambodia",
        qty: 4,
        price: 0,
        ticketType: "FREE",
        status: "publish"
    }
];