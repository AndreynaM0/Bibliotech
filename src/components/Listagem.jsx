import { useState } from "react";
import "../styles/listagem.css";

const gerarSlug = (texto = "") =>
  texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

function Listagem({ propsTelaAtiva, propsLivros, propsAtualizarLivros }) {
  const [filtroCategoria, setFiltroCategoria] = useState("Todas");
  const [filtroPesquisa, setFiltroPesquisa] = useState("");

  const handleEmprestarDevolver = (index) => {
    const listagemLivros = [...propsLivros];
    listagemLivros[index].statusLivro =
      listagemLivros[index].statusLivro === "Disponível" ? "Emprestado" : "Disponível";
    propsAtualizarLivros(listagemLivros);
  };

const normalizar = (texto = "") =>
  texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const livrosFiltrados = propsLivros
  .map((livro, index) => ({ livro, index }))
  .filter(({ livro }) => {
    const termo = normalizar(filtroPesquisa.trim());

    const bateCategoria =
      filtroCategoria === "Todas" || livro.categoria === filtroCategoria;

    const batePesquisa =
      normalizar(livro.titulo).includes(termo) ||
      normalizar(livro.autor).includes(termo);

    return bateCategoria && batePesquisa;
  });

  return (
    <main className="listagem">
      <header className="listagem__topo">
        <h1 className="listagem__titulo">Listagem</h1>
        <button
          type="button"
          className="botao botao--primario"
          onClick={() => propsTelaAtiva("Cadastro")}
        >
          Cadastrar
        </button>
      </header>

      <div className="listagem__filtros">
        <input
          className="campo campo--busca"
          placeholder="Pesquise seu livro"
          aria-label="Pesquisar livro"
          value={filtroPesquisa}
          onChange={(e) => setFiltroPesquisa(e.target.value)}
        />

        <select
          className="campo campo--categoria"
          aria-label="Filtrar por categoria"
          value={filtroCategoria}
          onChange={(e) => setFiltroCategoria(e.target.value)}
        >
          <option>Todas</option>
          <option>Aventura</option>
          <option>Ficção</option>
          <option>Fantasia</option>
          <option>Terror</option>
          <option>Romance</option>
          <option>Suspense Psicológico</option>
          <option>Distopia</option>
          <option>LGBTQ+</option>
        </select>
      </div>

      {propsLivros.length === 0 ? (
      <p className="listagem__vazio">
        Nenhum livro cadastrado ainda. Clique em Cadastrar para adicionar o primeiro.
      </p>
      ) : livrosFiltrados.length === 0 ? (
      <p className="listagem__vazio">
        Nenhum livro encontrado com esses filtros.
      </p>
      ) : (
    <ul className="listagem__grade">
      {livrosFiltrados.map(({ livro, index }) => {
        const disponivel = livro.statusLivro === "Disponível";

      return (
        <li key={index}
                className={`livro livro--${gerarSlug(livro.categoria)} ${
                  disponivel ? "livro--disponivel" : "livro--emprestado"
                }`}
              >
                <div className="livro__capa">
                  <span className="livro__categoria">{livro.categoria}</span>
                  {!disponivel && <span className="livro__selo">Emprestado</span>}
                </div>

                <div className="livro__info">
                  <h2 className="livro__titulo">{livro.titulo}</h2>
                  <p className="livro__autor">{livro.autor}</p>
                  <p className="livro__ano">Publicado em {livro.anoPublicacao}</p>
                  <p className="livro__status">{livro.statusLivro}</p>
                </div>

                <button
                  type="button"
                  className={`livro__botao ${
                    disponivel ? "livro__botao--emprestar" : "livro__botao--devolver"
                  }`}
                  onClick={() => handleEmprestarDevolver(index)}
                >
                  {disponivel ? "Emprestar" : "Devolver"}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}

export default Listagem;
