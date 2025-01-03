type UserPaymentType = {
    id: number;
    username: string;
    event: string;
    image: string;
    location: string;
    qty: number;
    price: number;
    ticketType: string;
    paymentMethod: string;
    startDate: string;
    endDate: string;
}



export const UserPaymentData: UserPaymentType[] = [
    {
        id: 1,
        username: 'john_doe',
        event: 'International Music Concert Extravaganza',
        image: '/cover.png',
        location: 'Madison Square Garden, New York City, New York',
        qty: 2,
        price: 50,
        ticketType: 'VIP',
        paymentMethod: 'Credit Card',
        startDate: '2023-11-01',
        endDate: '2023-11-02'
    },
    {
        id: 2,
        username: 'jane_smith',
        event: 'Annual Art Exhibition and Cultural Festival',
        image: '/cover.png',
        location: 'Los Angeles County Museum of Art, Los Angeles, California',
        qty: 1,
        price: 30,
        ticketType: 'PREMIUM',
        paymentMethod: 'PayPal',
        startDate: '2023-12-05',
        endDate: '2023-12-06'
    },
    {
        id: 3,
        username: 'alice_jones',
        event: 'Global Tech Conference and Innovation Summit',
        image: '/cover.png',
        location: 'Moscone Center, San Francisco, California',
        qty: 3,
        price: 100,
        ticketType: 'REGULAR',
        paymentMethod: 'Debit Card',
        startDate: '2024-01-10',
        endDate: '2024-01-12'
    },
    {
        id: 4,
        username: 'bob_brown',
        event: 'World Food Festival and Culinary Expo',
        image: '/cover.png',
        location: 'Grant Park, Chicago, Illinois',
        qty: 4,
        price: 20,
        ticketType: 'FREE',
        paymentMethod: 'Cash',
        startDate: '2024-02-15',
        endDate: '2024-02-16'
    },
    {
        id: 5,
        username: 'charlie_davis',
        event: 'National Book Fair and Literary Conference',
        image: '/cover.png',
        location: 'Boston Convention and Exhibition Center, Boston, Massachusetts',
        qty: 2,
        price: 15,
        ticketType: 'REGULAR',
        paymentMethod: 'Credit Card',
        startDate: '2024-03-10',
        endDate: '2024-03-11'
    },
    {
        id: 6,
        username: 'diana_lee',
        event: 'International Film Festival and Awards Ceremony',
        image: '/cover.png',
        location: 'Seattle International Film Festival, Seattle, Washington',
        qty: 1,
        price: 25,
        ticketType: 'PREMIUM',
        paymentMethod: 'PayPal',
        startDate: '2024-04-05',
        endDate: '2024-04-06'
    },
    {
        id: 7,
        username: 'edward_miller',
        event: 'Global Gaming Expo and Technology Showcase',
        image: '/cover.png',
        location: 'Las Vegas Convention Center, Las Vegas, Nevada',
        qty: 3,
        price: 60,
        ticketType: 'VIP',
        paymentMethod: 'Debit Card',
        startDate: '2024-05-15',
        endDate: '2024-05-16'
    },
    {
        id: 8,
        username: 'fiona_clark',
        event: 'National Science Fair and Innovation Expo',
        image: '/cover.png',
        location: 'George R. Brown Convention Center, Houston, Texas',
        qty: 2,
        price: 10,
        ticketType: 'FREE',
        paymentMethod: 'Cash',
        startDate: '2024-06-20',
        endDate: '2024-06-21'
    },
    {
        id: 9,
        username: 'george_harris',
        event: 'International Fashion Show and Designer Showcase',
        image: '/cover.png',
        location: 'Miami Beach Convention Center, Miami, Florida',
        qty: 1,
        price: 40,
        ticketType: 'PREMIUM',
        paymentMethod: 'Credit Card',
        startDate: '2024-07-10',
        endDate: '2024-07-11'
    },
    {
        id: 10,
        username: 'hannah_wilson',
        event: 'Comedy Night and Stand-Up Comedy Festival',
        image: '/cover.png',
        location: 'Paramount Theatre, Austin, Texas',
        qty: 2,
        price: 20,
        ticketType: 'REGULAR',
        paymentMethod: 'PayPal',
        startDate: '2024-08-15',
        endDate: '2024-08-16'
    },
    {
        id: 11,
        username: 'ian_martin',
        event: 'Broadway Theater Play and Musical Extravaganza',
        image: '/cover.png',
        location: 'Denver Center for the Performing Arts, Denver, Colorado',
        qty: 3,
        price: 35,
        ticketType: 'VIP',
        paymentMethod: 'Debit Card',
        startDate: '2024-09-05',
        endDate: '2024-09-06'
    },
    {
        id: 12,
        username: 'julia_roberts',
        event: 'International Dance Performance and Cultural Show',
        image: '/cover.png',
        location: 'San Diego Civic Theatre, San Diego, California',
        qty: 1,
        price: 45,
        ticketType: 'PREMIUM',
        paymentMethod: 'Cash',
        startDate: '2024-10-10',
        endDate: '2024-10-11'
    },
    {
        id: 13,
        username: 'kevin_white',
        event: 'Magic Show and Illusionist Performance',
        image: '/cover.png',
        location: 'Dr. Phillips Center for the Performing Arts, Orlando, Florida',
        qty: 2,
        price: 25,
        ticketType: 'REGULAR',
        paymentMethod: 'Credit Card',
        startDate: '2024-11-20',
        endDate: '2024-11-21'
    },
    {
        id: 14,
        username: 'lisa_green',
        event: 'Cooking Class and Culinary Arts Workshop',
        image: '/cover.png',
        location: 'Portland Culinary Institute, Portland, Oregon',
        qty: 1,
        price: 30,
        ticketType: 'PREMIUM',
        paymentMethod: 'PayPal',
        startDate: '2024-12-05',
        endDate: '2024-12-06'
    },
    {
        id: 15,
        username: 'michael_brown',
        event: 'Wine Tasting and Vineyard Tour',
        image: '/cover.png',
        location: 'Napa Valley Wine Train, Napa Valley, California',
        qty: 3,
        price: 50,
        ticketType: 'VIP',
        paymentMethod: 'Debit Card',
        startDate: '2025-01-15',
        endDate: '2025-01-16'
    },
    {
        id: 16,
        username: 'nina_jones',
        event: 'Yoga Retreat and Wellness Workshop',
        image: '/cover.png',
        location: 'Sedona Yoga Festival, Sedona, Arizona',
        qty: 2,
        price: 60,
        ticketType: 'REGULAR',
        paymentMethod: 'Cash',
        startDate: '2025-02-10',
        endDate: '2025-02-11'
    },
    {
        id: 17,
        username: 'oliver_smith',
        event: 'Marathon and Charity Run Event',
        image: '/cover.png',
        location: 'Boston Marathon, Boston, Massachusetts',
        qty: 1,
        price: 20,
        ticketType: 'FREE',
        paymentMethod: 'Credit Card',
        startDate: '2025-03-05',
        endDate: '2025-03-06'
    },
    {
        id: 18,
        username: 'paula_clark',
        event: 'Charity Gala and Fundraising Event',
        image: '/cover.png',
        location: 'The Ritz-Carlton, Washington D.C.',
        qty: 2,
        price: 100,
        ticketType: 'VIP',
        paymentMethod: 'PayPal',
        startDate: '2025-04-15',
        endDate: '2025-04-16'
    },
    {
        id: 19,
        username: 'quentin_miller',
        event: 'Startup Pitch and Entrepreneurial Conference',
        image: '/cover.png',
        location: 'Silicon Valley Innovation Center, Silicon Valley, California',
        qty: 3,
        price: 75,
        ticketType: 'PREMIUM',
        paymentMethod: 'Debit Card',
        startDate: '2025-05-10',
        endDate: '2025-05-11'
    },
    {
        id: 20,
        username: 'rachel_davis',
        event: 'Photography Workshop and Exhibition',
        image: '/cover.png',
        location: 'International Center of Photography, New York City, New York',
        qty: 1,
        price: 40,
        ticketType: 'REGULAR',
        paymentMethod: 'Cash',
        startDate: '2025-06-05',
        endDate: '2025-06-06'
    },
    {
        id: 21,
        username: 'steven_lee',
        event: 'Music Festival and Live Concert Series',
        image: '/cover.png',
        location: 'Hollywood Bowl, Los Angeles, California',
        qty: 2,
        price: 80,
        ticketType: 'VIP',
        paymentMethod: 'Credit Card',
        startDate: '2025-07-15',
        endDate: '2025-07-16'
    },
    {
        id: 22,
        username: 'tina_wilson',
        event: 'Art Workshop and Creative Arts Festival',
        image: '/cover.png',
        location: 'San Francisco Art Institute, San Francisco, California',
        qty: 1,
        price: 35,
        ticketType: 'PREMIUM',
        paymentMethod: 'PayPal',
        startDate: '2025-08-10',
        endDate: '2025-08-11'
    },
    {
        id: 23,
        username: 'ursula_martin',
        event: 'Film Screening and Director\'s Q&A',
        image: '/cover.png',
        location: 'Chicago International Film Festival, Chicago, Illinois',
        qty: 3,
        price: 20,
        ticketType: 'REGULAR',
        paymentMethod: 'Debit Card',
        startDate: '2025-09-05',
        endDate: '2025-09-06'
    },
    {
        id: 24,
        username: 'victor_roberts',
        event: 'Tech Meetup and Developer Conference',
        image: '/cover.png',
        location: 'Austin Convention Center, Austin, Texas',
        qty: 2,
        price: 10,
        ticketType: 'FREE',
        paymentMethod: 'Cash',
        startDate: '2025-10-15',
        endDate: '2025-10-16'
    },
    {
        id: 25,
        username: 'wendy_white',
        event: 'Cooking Show and Culinary Demonstration',
        image: '/cover.png',
        location: 'Oregon Convention Center, Portland, Oregon',
        qty: 1,
        price: 50,
        ticketType: 'VIP',
        paymentMethod: 'Credit Card',
        startDate: '2025-11-10',
        endDate: '2025-11-11'
    },
    {
        id: 26,
        username: 'xander_green',
        event: 'Wine Festival and Tasting Event',
        image: '/cover.png',
        location: 'Napa Valley Expo, Napa Valley, California',
        qty: 3,
        price: 60,
        ticketType: 'PREMIUM',
        paymentMethod: 'PayPal',
        startDate: '2025-12-05',
        endDate: '2025-12-06'
    },
    {
        id: 27,
        username: 'yara_brown',
        event: 'Fitness Bootcamp and Wellness Retreat',
        image: '/cover.png',
        location: 'Sedona Wellness Retreat, Sedona, Arizona',
        qty: 2,
        price: 30,
        ticketType: 'REGULAR',
        paymentMethod: 'Debit Card',
        startDate: '2026-01-15',
        endDate: '2026-01-16'
    },
    {
        id: 28,
        username: 'zachary_jones',
        event: 'Charity Run and Fundraising Marathon',
        image: '/cover.png',
        location: 'Boston Common, Boston, Massachusetts',
        qty: 1,
        price: 20,
        ticketType: 'FREE',
        paymentMethod: 'Cash',
        startDate: '2026-02-10',
        endDate: '2026-02-11'
    },
    {
        id: 29,
        username: 'amy_clark',
        event: 'Startup Conference and Entrepreneurial Summit',
        image: '/cover.png',
        location: 'Silicon Valley Conference Center, Silicon Valley, California',
        qty: 2,
        price: 100,
        ticketType: 'VIP',
        paymentMethod: 'Credit Card',
        startDate: '2026-03-05',
        endDate: '2026-03-06'
    },
    {
        id: 30,
        username: 'brian_miller',
        event: 'Photography Exhibition and Art Gallery',
        image: '/cover.png',
        location: 'Museum of Modern Art, New York City, New York',
        qty: 3,
        price: 40,
        ticketType: 'PREMIUM',
        paymentMethod: 'PayPal',
        startDate: '2026-04-10',
        endDate: '2026-04-11'
    }
];