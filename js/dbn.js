{
    let products = [
        {
            id: 1,
            badge: {
                title: "Sold",
                bg: "sold"
            },
            image: "/images/woman-2.jpg",
            name: "Woman's Backpack Brix",
            price: 856,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
            stars: 3,
            category: 1,

        },
        {
            id: 2,
            badge: {
                title: "",
                bg: ""
            },
            image: "/images/woman-1.jpg",
            name: "City Backpack RollTop",
            price: 1200,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
            stars: 4,
            category: 2,
        },
        {
            id: 3,
            badge: {
                title: "New",
                bg: "new"
            },
            image: "images/man-2.jpg",
            name: " Men's Backpack ReneDouble",
            price: 1345,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
            stars: 5,
            category: 3,
        },
        {
            id: 4,
            badge: {
                title: "Sale",
                bg: "sale"
            },
            image: "images/man-1.jpg",
            name: "Men's Backpack ZardDart",
            price: 620,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
            stars: 1,
            category: 4,
        },
        {
            id: 5,
            badge: {
                title: "",
                bg: ""
            },
            image: "images/bananka-man1.jpg",
            name: "Men's BumBag CityLong",
            price: 1125,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
            stars: 0,
            category: 5,
        },

        {
            id: 6,
            badge: {
                title: "",
                bg: ""
            },
            image: "images/bananka-man2.jpg",
            name: "Men's BumBag DinamicDart",
            price: 1100,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
            stars: 5,
            category: 6,
        },
        {
            id: 7,
            badge: {
                title: "Sale",
                bg: "sale"
            },
            image: "images/bananka-w1.jpg",
            name: "Woman's BumBag Lili City",
            price: 700,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
            stars: 4,
            category: 7,
        },

        {
            id: 8,
            badge: {
                title: "",
                bg: ""
            },
            image: "images/bananka-w2.jpg",
            name: "Woman's BumBag Lady City",
            price: 900,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
            stars: 3,
            category: 8,
        },
                      
        {
            id: 9,
            badge: {
                title: "Sold",
                bg: "sold"
            },
            image: "images/bag-1w.jpg",
            name: "Woman's Bag Vogue red",
            price: 2500,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
            stars: 5,
            category: 9,
        },
                   
        {
            id: 10,
            badge: {
                title: "New",
                bg: "new"
            },
            image: "images/bag-2w.jpg",
            name: "Woman's Bag Cleo blue",
            price: 2800,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
            stars: 0,
            category: 10,
        },
        {
            id: 11,
            badge: {
                title: "Sale",
                bg: "sale"
            },
            image: "/images/traveler-bag.jpg",
            name: "Travel Bag Baron",
            price: 950,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
            stars: 5,
            category: 11,
        },

        {
            id: 12,
            badge: {
                title: "New",
                bg: "new"
            },
            image: "images/bag-1man.jpg",
            name: "Men's Bag Brad Pitt",
            price: 11,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
            stars: 2,
            category: 12,
        },
	
    ];

    let categories = [
 
        {
            id: 1,
            image: "/images/woman-2.jpg",
            section: "Backpacks",
            name: "Woman's Backpacks"
        },
        {
            id: 2,
            image: "/images/woman-1.jpg",
            section: "Backpacks",
            name: "City Backpacks"
        },
        {
            id: 3,
            image: "images/man-2.jpg",
            section: "Backpacks",
            name: "Men's Backpacks"
        },
        {
            id: 4,
            image: "images/man-1.jpg",
            section: "Backpacks",
            name: "Men's Backpacks"
        },
        {
            id: 5,
            image: "images/bananka-man1.jpg",
            section: "BumBag",
            name: "Men's BumBag"
        },

        {
            id: 6,
            image: "images/bananka-man2.jpg",
            section: "BumBag",
            name: "Men's BumBag"
        },
        {
            id: 7,
            image: "images/bananka-w1.jpg",
            section: "BumBag",
            name: "Woman's BumBag"
        },

        {
            id: 8,
            image: "images/bananka-w2.jpg",
            section: "BumBag",
            name: "Woman's BumBag"
        },
                      
        {
            id: 9,
            image: "images/bag-1w.jpg",
            section: "Bags",
            name: "Woman's Bags"
        },
                   
        {
            id: 10,
            image: "images/bag-2w.jpg",
            section: "Bags",
            name: "Woman's Bags"
        },
        {
            id: 11,
            image: "images/traveler-bag.jpg",
            section: "Bags",
            name: "Travel Bags"
        },

        {
            id: 12,
            image: "images/bag-1man.jpg",
            section: "Bags",
            name: "Men's Bags"
        },

    ];
}