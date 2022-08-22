import livros from '../models/Livro.js';

class LivroController {

    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros)
        })
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save(() => {
            if(livro.titulo == undefined || livro.autor == undefined || livro.editora == undefined){
                res.status(500).send({message: `Falha ao cadastrar o livro`})
            } else{
                res.status(201).json(livro)
            }
        })
    }
}

export default LivroController