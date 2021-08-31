const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Numero base tabla multiplicar'                   
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra tabla de multiplicar'                  
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Muestra hasta que numero multiplicar'                  
    })
    .check( ( argv, options ) => {
        if( isNaN(argv.b) ){
            throw new Error('Debes ingresar un numero')
        }                    
        return true;
    })
    .argv;

module.exports = {
    argv
}
                