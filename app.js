const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {



    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite).
        then(archivo => console.log(`Archvo creado: ${ colors.green(archivo )}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
}







// let parametro = argv[2];

// base = parametro.split('=')[1]



console.log('Fin');