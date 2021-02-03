module.exports = {
    people: ['Peio', 'Erlantz', 'Carol', 'Ionmi'],
    human: {
        name: "",
        lastname: "",
        age: ""
    },
    campers: ['Aitor', 'Aitziber', 'Alicia', 'Benjamin', 'Esteban', 'Galder', 'Ibai', 'Iñaki', 'Iñigo', 'Ionmi',
        'Iratxe', 'Irene', 'JK', 'Jon E', 'Jon S', "Kepa", "Leire", "Lourdes", "Luis", "Michelle", "Miguel", "Nuria",
        "Sergio", "Xavi"],
    zeros: new Array(10).fill(0, 0),
    workshop: [
        {
            name: "Pescaderia",
            products: [
                {
                    name: "Salmon",
                    price: 6.95,
                    stock: 10
                },
                {
                    name: "Merluza",
                    price: 6.25,
                    stock: 10
                },
                {
                    name: "Lubina",
                    price: 2.40,
                    stock: 10
                }
            ]
        },
        {
            name: "Carniceria",
            products: [
                {
                    name: "Hamburguesa de Pavo",
                    price: 2.75,
                    stock: 10
                },
                {
                    name: "Pechugas de pollo",
                    price: 4.03,
                    stock: 10
                },
                {
                    name: "Carne picada ternera",
                    price: 6.40,
                    stock: 10
                }
            ]
        },
        {
            name: "Fruteria",
            products: [
                {
                    name: "Manzana Golden",
                    price: 1.69,
                    stock: 10
                },
                {
                    name: "Pera Conferencia",
                    price: 1.99,
                    stock: 10
                },
                {
                    name: "Limón, malla 1kg",
                    price: 1.69,
                    stock: 10
                }
            ]
        }
    ],
    cart: []
}