# 📚 Sistema de Gerenciamento de Biblioteca

Sistema web desenvolvido em **React** para gerenciamento básico de livros de uma biblioteca. O projeto permite cadastrar livros, visualizar o acervo, pesquisar por título ou autor, filtrar por categoria e controlar o status de empréstimo e devolução.

## 🎯 Objetivo

O objetivo do projeto é desenvolver uma aplicação simples para facilitar o gerenciamento de livros de uma biblioteca, permitindo que o usuário mantenha o controle das informações do acervo e da disponibilidade dos livros.

## ⚙️ Funcionalidades

### 📖 Cadastro de livros

É possível cadastrar um novo livro informando:

* Título;
* Autor;
* Ano de publicação;
* Categoria.

Ao cadastrar um livro, seu status inicial é definido automaticamente como **Disponível**.

### 📋 Listagem de livros

A tela de listagem apresenta os livros cadastrados em formato de cards, exibindo:

* Categoria;
* Título;
* Autor;
* Ano de publicação;
* Status do livro;
* Botão para empréstimo ou devolução.

### 🔎 Pesquisa

A aplicação permite pesquisar livros pelo:

* Título;
* Nome do autor.

A pesquisa não diferencia letras maiúsculas, minúsculas ou acentuação.

### 🏷️ Filtro por categoria

É possível filtrar os livros de acordo com sua categoria:

* Todas;
* Aventura;
* Ficção;
* Fantasia;
* Terror;
* Romance;
* Suspense Psicológico;
* Distopia;
* LGBTQ+.

### 🔄 Empréstimo e devolução

Cada livro possui um botão que altera seu status:

**Disponível → Emprestado**

**Emprestado → Disponível**

O texto e o estilo do botão também são alterados de acordo com o status atual.

### ⚠️ Validação do ano

No cadastro, o sistema valida o ano de publicação e apresenta uma mensagem de erro caso o valor informado esteja fora do intervalo permitido.

### 📱 Responsividade

A interface possui regras de CSS para adaptar o formulário e os elementos da aplicação a diferentes tamanhos de tela.

## 🛠️ Tecnologias utilizadas

* **React**
* **JavaScript**
* **HTML**
* **CSS**
* **Vite** *(caso utilizado na criação do projeto)*

### Bibliotecas e recursos

* React Hooks (`useState` e `useEffect`);
* Google Fonts;
* CSS Grid;
* CSS Flexbox;
* CSS Media Queries.

## 📂 Estrutura do projeto

A estrutura principal do projeto está organizada da seguinte maneira:

```text
src/
├── components/
│   ├── Cadastro.jsx
│   └── Listagem.jsx
│
├── styles/
│   ├── cadastro.css
│   └── listagem.css
│
├── App.jsx
└── ...
```

### Componentes

#### `App.jsx`

É o componente principal da aplicação.

Ele é responsável por:

* Controlar qual tela está ativa;
* Armazenar a lista de livros;
* Compartilhar os dados dos livros entre os componentes;
* Atualizar a lista de livros.

O estado principal dos livros é controlado através do `useState`:

```javascript
const [livros, setLivros] = useState([]);
```

A aplicação possui duas telas principais:

* `Listagem`
* `Cadastro`

A navegação entre elas é controlada pela variável `telaAtiva`.

#### `Cadastro.jsx`

Responsável pelo formulário de cadastro de livros.

Utiliza `useState` para controlar os campos:

* `titulo`;
* `autor`;
* `anoPublicacao`;
* `categoria`;
* `erroAno`.

Após o cadastro, o livro é adicionado à lista com o status inicial:

```text
Disponível
```

#### `Listagem.jsx`

Responsável pela exibição e gerenciamento dos livros cadastrados.

Possui:

* Campo de pesquisa;
* Filtro por categoria;
* Cards dos livros;
* Status de disponibilidade;
* Botão de empréstimo;
* Botão de devolução.

## 🎨 Estilização

A aplicação utiliza arquivos CSS separados para cada tela.

### `cadastro.css`

Responsável pela estilização do formulário de cadastro, incluindo:

* Campos de entrada;
* Botões;
* Mensagens de erro;
* Layout responsivo;
* Tipografia.

### `listagem.css`

Responsável pela estilização da tela de listagem, incluindo:

* Cards dos livros;
* Filtros;
* Campo de pesquisa;
* Botões;
* Status dos livros;
* Cores diferentes para as categorias;
* Responsividade.

O projeto utiliza as fontes:

* **Bricolage Grotesque** para títulos e elementos de destaque;
* **Literata** para textos.

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Acesse a pasta do projeto

```bash
cd nome-do-projeto
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
npm run dev
```

### 5. Acesse no navegador

Após iniciar o servidor, o terminal exibirá o endereço local da aplicação, normalmente:

```text
http://localhost:5173
```

## 🔄 Fluxo da aplicação

O funcionamento básico do sistema segue o seguinte fluxo:

```text
                 ┌──────────────┐
                 │     App      │
                 └──────┬───────┘
                        │
              ┌─────────┴─────────┐
              │                   │
              ▼                   ▼
       ┌─────────────┐     ┌─────────────┐
       │  Cadastro   │     │  Listagem   │
       └──────┬──────┘     └──────┬──────┘
              │                   │
              │                   │
              ▼                   ▼
       Adiciona livro      Pesquisa/Filtro
              │                   │
              │                   ▼
              │             Empréstimo
              │                   │
              │                   ▼
              │              Devolução
              │                   │
              └─────────┬─────────┘
                        ▼
                   Lista de livros
```

## 💾 Armazenamento dos dados

Atualmente, os livros são armazenados **somente no estado da aplicação utilizando React (`useState`)**.

Isso significa que os dados não são persistidos em um banco de dados ou `localStorage`. Ao recarregar a página, a lista de livros é reiniciada.

Uma possível evolução futura seria utilizar:

* `localStorage`;
* API/Backend;
* Banco de dados.

## 🔮 Melhorias futuras

Algumas funcionalidades que podem ser adicionadas posteriormente:

* [ ] Banco de dados;
* [ ] Backend/API;
* [ ] Edição de livros;
* [ ] Exclusão de livros;
* [ ] Sistema de usuários;
* [ ] Login e autenticação;
* [ ] Histórico de empréstimos;
* [ ] Data de empréstimo e devolução;
* [ ] Controle de usuários que realizaram empréstimos;
* [ ] Paginação da listagem;
* [ ] Ordenação dos livros;

## 👩‍💻 Projeto acadêmico

Projeto desenvolvido para fins acadêmicos e de aprendizado em desenvolvimento de aplicações web utilizando **React, JavaScript, HTML e CSS**.
