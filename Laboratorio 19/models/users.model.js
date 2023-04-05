const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class User {

    //Constructor: Permite crear un nuevo objeto y aquí se definen las propiedades del mismo.
    constructor(mi_usuario) {
        this.nombre = mi_usuario.nombre || 'Iván Paredes';
        this.username = mi_usuario.username || 'ivanparedes';
        this.password = mi_usuario.password || 'ivanparedesavilez';
    }

    //Método para guardar de manera persistente el nuevo objeto.
    save() {
        return bcrypt.hash(this.password,12)
        .then((password_cifrado) => {
            return db.execute(`
                INSERT INTO usuarios (nombre, username, password)
                VALUES (?, ?. ?)
            `, [this.nombre, this.username, password_cifrado]);
        })
        .catch((error) => {console.log(error) });
    }

    static fetchOne(username) {
        return db.execute(`
            SELECT *
            FROM usuarios
            WHERE username = ?
        `, [username]);
    }

    static getPrivilegios(username) {
        return db.execute(`
            SELECT p.nombre
            FROM privilegios p, rol_privilegio rp, roles r, usuario_rol ur, u
            WHERE u.username = ? AND u.id = ur.idUsuario AND ur.idRol = r.id
                AND rp.idRol = r.id AND rp.idPrivilegio = p.id
        `, [username]);
    }

}