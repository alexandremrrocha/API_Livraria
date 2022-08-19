import express from "express";

const app = express();

app.use(express.json())

const livros = [
    {id: 1, "titulo": "Harry Potter"},
    {id: 2, "titulo": "A Torre Negra"}
]

app.get('/', (req, res)=>{
    res.status(200).send('Curso de Node');
})

app.get('/livros', (req, res)=>{
    res.status(200).json(livros)
})

app.post('/livros', (req,res)=>{
    livros.push(req.body);
    res.status(201).send('Livro cadastrado com sucesso!')
})

// app.put('/livros/:id', (req, res)=>{

// })

export default app