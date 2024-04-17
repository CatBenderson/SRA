

export const leerArchivoJSON = (archivo) => {
    return fetch(archivo)
        .then(res => res.text())
        .then(content => {
            return JSON.parse(content);
        });
}

export const leerArchivo = (archivo) => {
    return fetch(archivo)
        .then(res => res.text())
        .then(content => {
            return content;
        });
}

export const renderizarContenido = (renderizable) => {
    if (renderizable) {
        return renderizable.split('\n').map((linea, index) => (
            <p key={index}>{linea}</p>
        ));
    }
    return null;
};

export const ubicarUnidad = () => {
    var url = window.location.href;
    var partesUrl = url.split('/');
    var numero = partesUrl[partesUrl.length - 1];
    return numero
}