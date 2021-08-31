const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

        try {         

            let salida = '';
            let consola = '';

            for(let i = 1; i <= hasta ; i++){

                consola += `${ base } ${ 'x'.red } ${ i } ${ '='.red } ${ colors.green(base * i) }\n`;
                salida += `${ base } x ${ i } = ${ base * i }\n`;
            }

            if(listar){       
                
                console.log('==================='.yellow)
                console.log('    Tabla del', base)
                console.log('==================='.yellow)
                           
                console.log(consola);
            }
            
            fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);

            return `archivo tabla-${ base }.txt`;
            
        } catch (error) {
            throw error;
        }
}

module.exports = {
    crearArchivo
}
