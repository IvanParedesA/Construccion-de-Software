const pizzas = [
    {
        nombre: "hawaiana",
        imagen: "https://napolicartagena.com/wp-content/uploads/2022/01/La-Pizza-Hawaiana-de-Canada.jpg",
        descripcion: "Rica pizza de jamón con piña",
        handle: "@hawaiana",
        ingredientes: "pizza, piña",
        precio: "200",
    },
    {
        nombre: "peperoni",
        imagen: "https://babycocina.com/wp-content/uploads/2021/02/pizza-pepperoni.jpg",
        descripción: "Rica pizza de peperoni",
        handle: "@peperoni",
        ingredientes: "peperoni",
        precio: "200",
    },
    {
        nombre: "suprema",
        imagen: "https://recetinas.com/wp-content/uploads/2022/06/pizza-suprema.jpg",
        descripción: "Rica pizza de aceitunas, peperoni, pimiento y carne",
        handle: "@suprema",
        ingredientes: "aceitunas, peperoni, pimiento, carne",
        precio: "200",
    },
    {
        nombre: "mexicana",
        imagen: "https://recetinas.com/wp-content/uploads/2022/07/pizza-mexicana.jpg",
        descripción: "Rica pizza de chorizo, chile y cebolla",
        handle: "@mexicana",
        ingredientes: "chorizo, chile, cebolla",
        precio: "200",
    },
    {
        nombre: "jamón",
        imagen: "https://imag.bonviveur.com/presentacion-final-de-la-pizza-prosciutto-o-con-jamon-cocido.jpg",
        descripción: "Rica pizza de jamón",
        handle: "@jamon",
        ingredientes: "jamón",
        precio: "200",
    },
    {
        nombre: "queso",
        imagen: "https://live.mrf.io/statics/i/ps/irecetasfaciles.com/wp-content/uploads/2019/08/pizza-de-jamon-queso-y-tocino.jpg?width=1200&enable=upscale",
        descripción: "Rica pizza de queso",
        handle: "@queso",
        ingredientes: "queso",
        precio: "200",
    },
    {
        nombre: "champiñones",
        imagen: "https://cdn7.kiwilimon.com/recetaimagen/38841/50030.jpg",
        descripción: "Rica pizza de champiñones",
        handle: "@champiñones",
        ingredientes: "champiñones",
        precio: "200",
    },
    {
        nombre: "salchicha",
        imagen: "https://comecarne.org/wp-content/uploads/2020/09/pizza_salchicha_xxl.jpg",
        descripción: "Rica pizza de salchicha",
        handle: "@salchicha",
        ingredientes: "salchicha",
        precio: "200",
    },
];

exports.get_lista = (request, response, next) => {
    response.render('lista', {pizzas: pizzas});
}