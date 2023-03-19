const db = require('../util/database');

/*
const pizzas = [
    {
        nombre: "hawaiana",
        imagen: "https://napolicartagena.com/wp-content/uploads/2022/01/La-Pizza-Hawaiana-de-Canada.jpg",
        descripcion: "Rica pizza de jamón con piña",
        handle: "@hawaiana",
        ingredientes: "jamón, piña",
        precio: "200",
    },
    {
        nombre: "peperoni",
        imagen: "https://babycocina.com/wp-content/uploads/2021/02/pizza-pepperoni.jpg",
        descripcion: "Rica pizza de peperoni",
        handle: "@peperoni",
        ingredientes: "peperoni",
        precio: "200",
    },
    {
        nombre: "suprema",
        imagen: "https://recetinas.com/wp-content/uploads/2022/06/pizza-suprema.jpg",
        descripcion: "Rica pizza de aceitunas, peperoni, pimiento y carne",
        handle: "@suprema",
        ingredientes: "aceitunas, peperoni, pimiento, carne",
        precio: "200",
    },
    {
        nombre: "mexicana",
        imagen: "https://recetinas.com/wp-content/uploads/2022/07/pizza-mexicana.jpg",
        descripcion: "Rica pizza de chorizo, chile y cebolla",
        handle: "@mexicana",
        ingredientes: "chorizo, chile, cebolla",
        precio: "200",
    },
    {
        nombre: "jamón",
        imagen: "https://imag.bonviveur.com/presentacion-final-de-la-pizza-prosciutto-o-con-jamon-cocido.jpg",
        descripcion: "Rica pizza de jamón",
        handle: "@jamon",
        ingredientes: "jamón",
        precio: "200",
    },
    {
        nombre: "queso",
        imagen: "https://live.mrf.io/statics/i/ps/irecetasfaciles.com/wp-content/uploads/2019/08/pizza-de-jamon-queso-y-tocino.jpg?width=1200&enable=upscale",
        descripcion: "Rica pizza de queso",
        handle: "@queso",
        ingredientes: "queso",
        precio: "200",
    },
    {
        nombre: "champiñones",
        imagen: "https://cdn7.kiwilimon.com/recetaimagen/38841/50030.jpg",
        descripcion: "Rica pizza de champiñones",
        handle: "@champiñones",
        ingredientes: "champiñones",
        precio: "200",
    },
    {
        nombre: "salchicha",
        imagen: "https://comecarne.org/wp-content/uploads/2020/09/pizza_salchicha_xxl.jpg",
        descripcion: "Rica pizza de salchicha",
        handle: "@salchicha",
        ingredientes: "salchicha",
        precio: "200",
    },
];
*/

module.exports = class Pizza {
    //Constructor de la clase:
    //Se utiliza para crear un nuevo objeto y definir las propiedades del modelo
    constructor(mi_pizza) {
        this.nombre = mi_pizza.nombre || "Hawaiana";
        this.imagen = mi_pizza.imagen || "https://bulma.io/images/placeholders/1280x960.png";
        this.descripcion = mi_pizza.descripcion || "Rica pizza de jamón con piña";
        this.handle = mi_pizza.handle || "@pizza";
        this.ingredientes = mi_pizza.ingredientes || "jamón, piña";
        this.precio = mi_pizza.precio || "200";
    }

    //Método para guardar de manera persistente el nuevo objeto.
    save() {
        return db.execute(
            `INSERT INTO pizzas(nombre, imagen, descripcion, handle, precio)
            VALUES(?, ?, ?, ?, ?)`,
            [this.nombre, this.imagen, this.descripcion, this.handle, this.precio]
        );
    }

    //Método para devolver los objetos del almacenamiento persistente.
    static fetch(id){
        letquery = `SELECT * FROM pizzas`;
        if (id != 0) {
            query += ' WHERE id = ?'
            return db.execute(query, [id]);
        }
        return db.execute(query);
    }
}