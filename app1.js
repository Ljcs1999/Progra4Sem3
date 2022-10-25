

const yargs = require('yargs').option('n1',{alias:'n1',type:'number'}).option('n2',{alias:'n2',type:'number'}).check((argv,options)=>{
    if(argv.n1<0 || argv.n2<0){
        throw 'El numero debe ser mayor que cero'
    }else{
        return true
    }
})

let suma = yargs.argv.n1+yargs.argv.n2

console.log(yargs.argv);
console.log(suma);