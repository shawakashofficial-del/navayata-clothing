const products = [
    {
        name: 'Saree',
        description: 'A beautiful drape that expresses elegance and tradition.',
        price: 1500,
        image: 'link_to_saree_image'
    },
    {
        name: 'Lehenga',
        description: 'A traditional skirt that is often worn with a blouse.',
        price: 2500,
        image: 'link_to_lehenga_image'
    },
    {
        name: 'Kurta',
        description: 'A comfortable and stylish traditional shirt.',
        price: 1200,
        image: 'link_to_kurta_image'
    },
    {
        name: 'Dupatta',
        description: 'A graceful scarf to complement any outfit.',
        price: 800,
        image: 'link_to_dupatta_image'
    },
    {
        name: 'Bridal Set',
        description: 'An exquisite set for the bride, including jewelry and attire.',
        price: 5000,
        image: 'link_to_bridal_set_image'
    },
    {
        name: 'Sherwani',
        description: 'An elegant outfit for men, perfect for weddings.',
        price: 3000,
        image: 'link_to_sherwani_image'
    }
];

function loadProducts() {
    return products;
}

module.exports = { loadProducts };