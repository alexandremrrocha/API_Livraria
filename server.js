const http = require("http")
const port = 3000;

const rotas ={
    '/': 'Curso de node',
    '/livros': 'Entrei na pagina de livros',
    '/autores': 'Listagem de autores'
}

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end(rotas[req.url]);
})

server.listen(port,()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})