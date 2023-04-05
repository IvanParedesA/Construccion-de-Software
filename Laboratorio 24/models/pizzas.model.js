const db = require('../util/database');

module.exports = class Pizza {
    //Constructor de la clase:
    //Se utiliza para crear un nuevo objeto y definir las propiedades del modelo
    constructor(mi_pizza) {
        this.nombre = mi_pizza.nombre || "Hawaiana";
        this.imagen = mi_pizza.imagen || "pizzas.png";
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
        let query = `SELECT * FROM pizzas`;
        if (id != 0) {
            query += ' WHERE id = ?'
            return db.execute(query, [id]);
        }
        return db.execute(query);
    }

    static find(valor_busqueda) {
        return db.execute(`
            SELECT *
            FROM pizzas
            WHERE nombre LIKE ? OR descripcion LIKE ? OR handle LIKE ?
            `,
            [
                '%' + valor_busqueda + '%', '%' + valor_busqueda + '%',
                '%' + valor_busqueda + '%'
            ]
        );
    }
}