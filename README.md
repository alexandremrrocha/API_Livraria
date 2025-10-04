# API Livraria

API RESTful para gestão de autores e livros, construída com Node.js, Express e MongoDB. Ela expõe endpoints para cadastrar, consultar, atualizar e excluir registros, além de permitir filtrar livros por editora.

## Funcionalidades

- CRUD completo de livros com relacionamento para autores.
- CRUD completo de autores.
- Filtro de livros por editora por meio de query string (`/livros/busca?editora=`).
- Endpoint raiz (`/`) para verificação rápida da disponibilidade da API.

## Tecnologias

- Node.js
- Express
- MongoDB
- Mongoose
- Nodemon (ambiente de desenvolvimento)

## Pré-requisitos

- Node.js 16 ou superior
- npm 8 ou superior
- Instância do MongoDB (local ou hospedada, como MongoDB Atlas)
- Credenciais de conexão com o banco de dados

## Configuração e execução

1. Clone o repositório e acesse a pasta do projeto.
2. Instale as dependências: `npm install`.
3. Crie o arquivo `src/config/dbConnect.js` (o diretório está no `.gitignore` para evitar expor credenciais) com o conteúdo abaixo, ajustando a string de conexão:

   ```javascript
   import mongoose from "mongoose";
   
   mongoose.connect("mongodb://localhost:27017/livraria");
   
   const db = mongoose.connection;
   
   export default db;
   ```
   Se preferir manter a credencial fora do código, exponha uma variável de ambiente (`STRING_CONEXAO`) e utilize-a na conexão, por exemplo: `mongoose.connect(process.env.STRING_CONEXAO)`.
4. Inicie a aplicação em modo de desenvolvimento: `npm run dev`.
5. A API ficará disponível em `http://localhost:3000`.

## Rotas principais

| Método | Rota               | Descrição                                 |
| ------ | ------------------ | ----------------------------------------- |
| GET    | `/`                | Retorna mensagem de status da API         |
| GET    | `/livros`          | Lista todos os livros                     |
| GET    | `/livros/:id`      | Busca um livro pelo ID                    |
| GET    | `/livros/busca`    | Filtra livros por editora (`?editora=`)   |
| POST   | `/livros`          | Cadastra um novo livro                    |
| PUT    | `/livros/:id`      | Atualiza um livro existente               |
| DELETE | `/livros/:id`      | Remove um livro                           |
| GET    | `/autores`         | Lista todos os autores                    |
| GET    | `/autores/:id`     | Busca um autor pelo ID                    |
| POST   | `/autores`         | Cadastra um novo autor                    |
| PUT    | `/autores/:id`     | Atualiza um autor existente               |
| DELETE | `/autores/:id`     | Remove um autor                           |

## Estrutura de pastas

```
.
|-- package.json
|-- server.js
|-- src/
|   |-- app.js
|   |-- controllers/
|   |   |-- autoresController.js
|   |   `-- livrosController.js
|   |-- models/
|   |   |-- Autor.js
|   |   `-- Livro.js
|   `-- routes/
|       |-- autoresRoutes.js
|       |-- livrosRoutes.js
|       `-- index.js
```

## Scripts disponíveis

- `npm run dev`: inicia o servidor em modo de desenvolvimento com o Nodemon.

## Boas práticas

- Mantenha o arquivo `src/config/dbConnect.js` fora do controle de versão para proteger credenciais sensíveis.
- Utilize ferramentas como o [MongoDB Compass](https://www.mongodb.com/products/compass) para inspecionar os dados da base enquanto desenvolve.
