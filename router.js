function index(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('Pagina de Inicio Actualizada');
}

let objeto={
    "user":"lopez",
    "password":"12345"
}

//METODO GET, POST, PUT o DELETE

function empleado(req,res){
    res.writeHead(200,{'Content-Type':'application/json'});
    res.write(JSON.stringify(objeto));
}

module.exports={
    index,
    empleado
}