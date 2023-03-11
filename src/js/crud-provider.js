
const urlCRUD = 'https://reqres.in/api/users';


// Llamar a un usuario
const getUsuario = async ( id ) => {

    //Obs: Interactuar con response y data al hacer una petición HTTP
    const resp = fetch(`${ urlCRUD }/${ id }`);
    const { data } = await (await resp).json();
    return data;
}

// Crear un nuevo usuario
const crearUsuario = async ( usuario ) => {

    const resp= await fetch( urlCRUD, {
        method: 'POST',
        body: JSON.stringify( usuario ),
        // headers: Es la data adicional sobre la petición
        headers: {
            // Dice al back-end que la información enviada es tipo json
            'Content-Type': 'application/json'
        }
    });
   
    return await resp.json();
}


const updateUsuario = async ( id, usuario ) => {

    const resp= await fetch (`${ urlCRUD }/${ id }` , {
        method: 'PUT',
        body: JSON.stringify( usuario ),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    
    return await resp.json();
}

const deleteUsuario = async ( id ) => {

    const resp= await fetch (`${ urlCRUD }/${ id }`, {
        method: 'DELETE',
    });

    return ( resp.ok ) ? 'Borrado' : 'No se pudo eliminar' ;
}

export {
    getUsuario,
    crearUsuario,
    updateUsuario,
    deleteUsuario,
}