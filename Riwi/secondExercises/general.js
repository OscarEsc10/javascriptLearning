const user = [
    {
        id: 1,
        name: "Ana Torres",
        age: 28,
        city: "Bogotá",
        email: "ana.torres@example.com",
        shop: [
            { product: "Laptop", price: 3500 },
            { product: "Mouse", price: 50 }
        ]
    },
    {
        id: 2,
        name: "Carlos Ruiz",
        age: 35,
        city: "Medellín",
        email: "carlos.ruiz@example.com",
        shop: [
            { product: "cellphone", price: 1200 },
            { product: "headphones", price: 200 }
        ]
    },
    {
        id: 3,
        name: "Laura Gómez",
        age: 22,
        city: "Cali",
        email: "laura.gomez@example.com",
        shop: [
            { product: "Tablet", price: 800 },
            { product: "Tablet carpet", price: 30 }
        ]
    },
    {
        id: 4,
        name: "Mateo Fernández",
        age: 42,
        city: "Bogotá",
        email: "mateo.fernandez@example.com",
        shop: [
            { product: "Monitor", price: 1000 }
        ]
    },
    {
        id: 5,
        name: "Sofía Martínez",
        age: 30,
        city: "Barranquilla",
        email: "sofia.martinez@example.com",
        shop: [
            { product: "keyboard", price: 80 },
            { product: "Mousepad", price: 20 }
        ]
    }
];


// Listar los names de todos los usuarios.
user.forEach((item) => console.log(`${item.name}`))

// Filtrar usuarios que vivan en Bogotá.

const filtercity = user.filter((item) => item.city == "Bogotá")
console.log(`filter by city: ${filtercity}`)


// Obtener un arreglo con los emails electrónicos.

// Sumar las agees de todos los usuarios.

// Encontrar el usuario con mayor age.

// Verificar si algún usuario tiene menos de 25 años.

// Agregar una nueva compra al usuario con ID 3.

// Calcular el total gastado por cada usuario.

// Crear un nuevo arreglo con el name y city de cada usuario.

// Ordenar los usuarios por age de menor a mayor.

// Contar cuántos usuarios hay por city.

// Eliminar al usuario con ID 2.

// Modificar el email del usuario llamado "Mateo Fernández".

// Buscar el primer usuario que compró un “Mouse”.

// Crear una función que reciba un name y devuelva las shop de ese usuario.