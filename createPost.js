let editor = new Editor({
    element: document.getElementById('postBody'),
    status: []
});
editor.render();



let fecha = new Date();

const buscarInput = document.querySelector('input');
const mainContainer = document.getElementById('mainContainer');

let tagsArray = ['#1', '#2', '#3'];
let post = {
    titulo: "post diciembre del 2021",
    imagenPortada: "https://media.bitdegree.org/storage/media/images/2018/11/What-Is-A-Full-Stack-Developer-and-Everything-You-Need-to-Know-to-Start.jpg",
    contenido: "este es un texto de ejemplo",
    fechaCreacion: new Date("december 1 2021"),
    tags: tagsArray
};



const crearPost = (post) => {
    postPost(
        post.titulo,
        post.imagenPortada,
        post.contenido,
        post.fechaCreacion,
        post.tags,
        (body) => {
            alert(body.name);
        }
    )
}