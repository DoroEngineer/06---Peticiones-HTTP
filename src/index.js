//import { obtenerUsuarios } from "./js/http-provider";
import { init } from './js/usuarios-page2'







init();


// EJEMPLO CRUD
// Obs: guarda todas las funciones exportadas en CRUD
/*import * as CRUD from './js/crud-provider'



// LLamar un usuario
CRUD.getUsuario( 2 ).then( console.log );


// Crea un usuario
CRUD.crearUsuario({
    name: 'Thobias',
    job: 'Informático',
} ).then( console.log );

// Actualizar un usuario
CRUD.updateUsuario( 1, {
    name: 'Magali',
    job: 'De todito',   
}).then( console.log );

// Eliminar usuario
CRUD.deleteUsuario( 1 ).then(console.log);*/