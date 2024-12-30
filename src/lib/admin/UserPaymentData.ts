export type UserPaymentType = {
    id: number;
    username: string;
    gender: string;
    event: string;
    image: string;
    location: string;
    qty: number;
    price: number;
    ticketType: string;
    paymentMethod: string;
    paymentDate: string;
    startDate: string;
    endDate: string;
}



export const userPaymentData: UserPaymentType[] = [
    {
        id: 1,
        username: 'john_doe',
        gender: 'Male',
        event: 'International Music Concert Extravaganza',
        image: '/cover.png',
        location: 'Madison Square Garden, New York City, New York',
        qty: 2,
        price: 50,
        ticketType: 'VIP',
        paymentMethod: 'Credit Card',
        paymentDate: '2023-10-31',
        startDate: '2023-11-01',
        endDate: '2023-11-02'
    },
    {
        id: 2,
        username: 'jane_smith',
        gender: 'Female',
        event: 'Annual Art Exhibition and Cultural Festival',
        image: '/cover.png',
        location: 'Los Angeles County Museum of Art, Los Angeles, California',
        qty: 1,
        price: 30,
        ticketType: 'PREMIUM',
        paymentMethod: 'PayPal',
        paymentDate: '2023-12-04',
        startDate: '2023-12-05',
        endDate: '2023-12-06'
    },
    {
        id: 3,
        username: 'alice_jones',
        gender: 'Female',
        event: 'Global Tech Conference and Innovation Summit',
        image: '/cover.png',
        location: 'Moscone Center, San Francisco, California',
        qty: 3,
        price: 100,
        ticketType: 'REGULAR',
        paymentMethod: 'Debit Card',
        paymentDate: '2024-01-09',
        startDate: '2024-01-10',
        endDate: '2024-01-12'
    },
    {
        id: 4,
        username: 'mike_hamilton',
        gender: 'Male',
        event: 'World Culinary Expo',
        image: '/cover.png',
        location: 'Paris Expo Porte de Versailles, Paris, France',
        qty: 5,
        price: 200,
        ticketType: 'VIP',
        paymentMethod: 'Credit Card',
        paymentDate: '2024-02-14',
        startDate: '2024-02-15',
        endDate: '2024-02-17'
    },
    {
        id: 5,
        username: 'susan_baker',
        gender: 'Female',
        event: 'International Science Fair',
        image: '/cover.png',
        location: 'Excel London, London, United Kingdom',
        qty: 1,
        price: 75,
        ticketType: 'PREMIUM',
        paymentMethod: 'Bank Transfer',
        paymentDate: '2024-03-01',
        startDate: '2024-03-02',
        endDate: '2024-03-03'
    },
    {
        id: 6,
        username: 'peter_pan',
        gender: 'Male',
        event: 'Fantasy Book Fair',
        image: '/cover.png',
        location: 'Frankfurt Book Fair, Frankfurt, Germany',
        qty: 2,
        price: 40,
        ticketType: 'REGULAR',
        paymentMethod: 'PayPal',
        paymentDate: '2024-04-05',
        startDate: '2024-04-06',
        endDate: '2024-04-07'
    },
    {
        id: 7,
        username: 'diana_prince',
        gender: 'Female',
        event: 'Superhero Convention',
        image: '/cover.png',
        location: 'Comic-Con International, San Diego, California',
        qty: 4,
        price: 150,
        ticketType: 'VIP',
        paymentMethod: 'Debit Card',
        paymentDate: '2024-05-20',
        startDate: '2024-05-21',
        endDate: '2024-05-23'
    },
    {
        id: 8,
        username: 'bruce_wayne',
        gender: 'Male',
        event: 'Luxury Auto Show',
        image: '/cover.png',
        location: 'Geneva International Motor Show, Geneva, Switzerland',
        qty: 1,
        price: 500,
        ticketType: 'VIP',
        paymentMethod: 'Credit Card',
        paymentDate: '2024-06-10',
        startDate: '2024-06-11',
        endDate: '2024-06-12'
    },
    {
        id: 9,
        username: 'clark_kent',
        gender: 'Male',
        event: 'Journalism Awards Night',
        image: '/cover.png',
        location: 'National Press Club, Washington, D.C.',
        qty: 2,
        price: 60,
        ticketType: 'PREMIUM',
        paymentMethod: 'Bank Transfer',
        paymentDate: '2024-07-25',
        startDate: '2024-07-26',
        endDate: '2024-07-27'
    },
    {
        id: 10,
        username: 'lois_lane',
        gender: 'Female',
        event: 'Women in Journalism Summit',
        image: '/cover.png',
        location: 'World Trade Center, Dubai, UAE',
        qty: 3,
        price: 90,
        ticketType: 'PREMIUM',
        paymentMethod: 'PayPal',
        paymentDate: '2024-08-18',
        startDate: '2024-08-19',
        endDate: '2024-08-20'
    },
    {
        id: 11,
        username: 'tony_stark',
        gender: 'Male',
        event: 'Technology and Innovation Fair',
        image: '/cover.png',
        location: 'CES, Las Vegas, Nevada',
        qty: 4,
        price: 120,
        ticketType: 'VIP',
        paymentMethod: 'Credit Card',
        paymentDate: '2024-09-03',
        startDate: '2024-09-04',
        endDate: '2024-09-06'
    },
    {
        id: 12,
        username: 'steve_rogers',
        gender: 'Male',
        event: 'World War History Conference',
        image: '/cover.png',
        location: 'Smithsonian Institution, Washington, D.C.',
        qty: 2,
        price: 45,
        ticketType: 'REGULAR',
        paymentMethod: 'Debit Card',
        paymentDate: '2024-09-20',
        startDate: '2024-09-21',
        endDate: '2024-09-22'
    },
    {
        id: 13,
        username: 'natasha_romanoff',
        gender: 'Female',
        event: 'Spy Thriller Film Festival',
        image: '/cover.png',
        location: 'Venice Film Festival, Venice, Italy',
        qty: 3,
        price: 80,
        ticketType: 'PREMIUM',
        paymentMethod: 'Bank Transfer',
        paymentDate: '2024-10-05',
        startDate: '2024-10-06',
        endDate: '2024-10-08'
    },
    {
        id: 14,
        username: 'thor_odinson',
        gender: 'Male',
        event: 'Mythology Conference',
        image: '/cover.png',
        location: 'Oslo City Hall, Oslo, Norway',
        qty: 2,
        price: 70,
        ticketType: 'VIP',
        paymentMethod: 'Credit Card',
        paymentDate: '2024-11-01',
        startDate: '2024-11-02',
        endDate: '2024-11-03'
    },
];
