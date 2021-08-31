const { crearArchivo } = require('./helpers/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');

//console.clear();

console.clear();

//console.log( process.argv );
console.log( argv );

//console.log(argv.b)

//console.log(process.argv);

// const [ , , arg3 = 'base=5'] = process.argv;
// const [ ,base = 5 ] = arg3.split('=');

//console.log(base);


// const base = 7;

 crearArchivo( argv.b, argv.l, argv.h )
 .then ( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado' ))
 .catch( err => console.log(err));


