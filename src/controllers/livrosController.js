import livros from '../models/Livro.js';

class LivroController {

    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros)
        })
    }

    static listarLivroId = (req, res) =>{
        const id = req.params.id;

        livros.findById(id, (err, livros) =>{
            if (err){
                res.status(400).send({message: `${err.message} - Id do livro não localizado`})
            } else{
                res.status(200).send(livros);
                
            }
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

    static atualizarLivro = (req, res) =>{
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
            if(!err){
                res.status(200).send({message: 'Livro atualizado com sucesso'})
            } else{
                res.status(500).send({message: err})
            }
        })
    }

    static excluirLivro = (req, res) =>{
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) =>{
            if(!err){
                res.status(200).json("Livro removido com sucesso")
            } else{
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default LivroController