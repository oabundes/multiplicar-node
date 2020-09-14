const opt = {
    limite: {
        default: 5,
        alias: 'l'
    },
    base: {
        demand: true,
        alias: 'b'
    }
};


const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opt)
    .command('crear', 'crear un archivo con la tabla de multiplicar', opt)
    .help()
    .argv;



module.exports = {
    argv
}