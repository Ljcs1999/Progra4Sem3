function index(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('Pagina de Inicio Actualizada');
}

module.exports={
    index
}

let objeto={
    "user":"lopez",
    "password":"12345"
}

function empleado(req,res){
    res.writeHead(200,{'Content-Type':'application/json'});
    res.write(JSON.stringify(objeto));
}

module.exports={
    empleado
}