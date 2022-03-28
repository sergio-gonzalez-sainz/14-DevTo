const urlDB = "https://dev-to-1-default-rtdb.firebaseio.com/";

const postPost = (titulo, imagenPortada, contenido, fechaCreacion, tags, funcion) => {
    const url = `${urlDB}/post.json`;
    const post = {
        titulo,
        imagenPortada,
        contenido,
        fechaCreacion,
        tags
    };

    fetch(url, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((respuesta) => respuesta.json())
        .then((body) => funcion(body))
        .catch((error) => console.log(error));
}

const getPost = (funcion) => {
    const url = `${urlDB}/post.json`;
    fetch(url)
        .then((respuesta) => respuesta.json())
        .then((body) => funcion(body))
        .catch((error) => console.log(error));
}