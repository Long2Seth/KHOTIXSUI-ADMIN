type EventType = {
    id: string;
    createBy: string;
    eventName: string;
    startDate: string;
    endDate: string;
    location: string;
    status: string;
    image: string;
    description: string;
    category: string;
}

export const AllEventData: EventType[] = [
    {
        id: "1",
        createBy: "Alice",
        eventName: "Tech Conference 2024",
        startDate: "2024-01-15T09:00:00",
        endDate: "2024-01-15T17:00:00",
        location: "San Francisco, CA",
        status: "enable",
        image: "/cover.png",
        description: "Join us for the Tech Conference 2024 in San Francisco, CA. This event will bring together industry leaders, innovators, and enthusiasts to discuss the latest trends and advancements in technology.",
        category: "Technology"
    },
    {
        id: "2",
        createBy: "Bob",
        eventName: "Live Music Concert",
        startDate: "2024-02-20T19:00:00",
        endDate: "2024-02-20T22:00:00",
        location: "Austin, TX",
        status: "enable",
        image: "/cover.png",
        description: "Experience the best live music from top artists in Austin. A night of great music, food, and memories awaits.",
        category: "Concert"
    },
    {
        id: "3",
        createBy: "Charlie",
        eventName: "Community Meetup",
        startDate: "2024-03-10T14:00:00",
        endDate: "2024-03-10T16:00:00",
        location: "Seattle, WA",
        status: "disable",
        image: "/cover.png",
        description: "Connect with your local community members and discuss plans for future growth and collaboration.",
        category: "Community"
    },
    {
        id: "4",
        createBy: "Diana",
        eventName: "Startup Conferences",
        startDate: "2024-04-05T10:00:00",
        endDate: "2024-04-05T16:00:00",
        location: "Los Angeles, CA",
        status: "enable",
        image: "/cover.png",
        description: "A platform for entrepreneurs to present their ideas, network with investors, and explore potential partnerships.",
        category: "Conferences"
    },
    {
        id: "5",
        createBy: "Ethan",
        eventName: "Marathon 2024",
        startDate: "2024-05-15T06:00:00",
        endDate: "2024-05-15T11:00:00",
        location: "New York, NY",
        status: "enable",
        image: "/cover.png",
        description: "Participate in the annual marathon event. Run for a cause and enjoy a day filled with energy and sportsmanship.",
        category: "Sport"
    },
    {
        id: "6",
        createBy: "Fiona",
        eventName: "Tech Workshop",
        startDate: "2024-06-20T09:00:00",
        endDate: "2024-06-20T15:00:00",
        location: "Boston, MA",
        status: "enable",
        image: "/cover.png",
        description: "Hands-on learning experience with top tech experts. Dive into the latest technologies and upgrade your skills.",
        category: "Technology"
    },
    {
        id: "7",
        createBy: "Greg",
        eventName: "General Knowledge Fair",
        startDate: "2024-07-01T09:00:00",
        endDate: "2024-07-01T17:00:00",
        location: "Chicago, IL",
        status: "disable",
        image: "/cover.png",
        description: "Explore a variety of topics at the knowledge fair. From science to history, there's something for everyone.",
        category: "General"
    },
    {
        id: "8",
        createBy: "Helen",
        eventName: "Sports Meet 2024",
        startDate: "2024-08-10T08:00:00",
        endDate: "2024-08-10T14:00:00",
        location: "Denver, CO",
        status: "enable",
        image: "/cover.png",
        description: "Join the annual sports meet and participate in exciting competitions. A day filled with athletic spirit and camaraderie.",
        category: "Sport"
    },
    {
        id: "9",
        createBy: "Isabella",
        eventName: "Community Clean-Up Drive",
        startDate: "2024-09-15T07:00:00",
        endDate: "2024-09-15T12:00:00",
        location: "San Diego, CA",
        status: "enable",
        image: "/cover.png",
        description: "Join hands with community members to clean up local parks and streets. Let's make a difference together.",
        category: "Community"
    },
    {
        id: "10",
        createBy: "James",
        eventName: "Tech Summit",
        startDate: "2024-10-25T09:00:00",
        endDate: "2024-10-25T17:00:00",
        location: "San Jose, CA",
        status: "enable",
        image: "/cover.png",
        description: "Discover the future of technology at the Tech Summit 2024. Network with tech leaders and explore innovative solutions.",
        category: "Technology"
    }
];
