import "../styles/cadastro.css";
import { useState } from "react";


function Cadastro({ propsTelaAtiva, propsLivros, propsAtualizarLivros }) {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [anoPublicacao, setAnoPublicacao] = useState("");
  const [categoria, setCategoria] = useState("Aventura");
  const [erroAno, setErroAno] = useState("");

  const handleCadastrarLivro = (e) => {
    e.preventDefault();

    const anoAtual = new Date().getFullYear();
    const ano = Number(anoPublicacao);

    if (ano < 1800 || ano > anoAtual) {
    setErroAno(`Digite um ano entre 1900 e ${anoAtual}.`);
    return;
    }

    const informacoesLivro = {
      titulo: titulo,
      autor: autor,
      anoPublicacao: anoPublicacao,
      categoria: categoria,
      statusLivro: "Disponível",
    };

    propsAtualizarLivros([...propsLivros, informacoesLivro]);

    propsTelaAtiva("Listagem");
  };

  return (
    <main className="cadastro">
      <div className="formulario">
        <h1 className="formulario__titulo">Cadastro de Livros</h1>

        <form className="formulario__form" onSubmit={handleCadastrarLivro}>
          <div className="formulario__campo">
            <label className="formulario__rotulo" htmlFor="titulo">
              Título
            </label>
            <input
              id="titulo"
              className="formulario__input"
              type="text"
              placeholder="Título do livro"
              required
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>

          <div className="formulario__campo">
            <label className="formulario__rotulo" htmlFor="autor">
              Autor
            </label>
            <input
              id="autor"
              className="formulario__input"
              type="text"
              placeholder="Autor do livro"
              required
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
            />
          </div>

          <div className="formulario__linha">
            <div className="formulario__campo">
              <label className="formulario__rotulo" htmlFor="ano">
                Ano de publicação
              </label>
              <input
                id="ano"
                className={`formulario__input ${erroAno ? "formulario__input--erro" : ""}`}
                type="text"
                inputMode="numeric"
                placeholder="Ex: 2003"
                required
                aria-invalid={erroAno ? "true" : "false"}
                aria-describedby={erroAno ? "ano-erro" : undefined}
                value={anoPublicacao}
                onChange={(e) => {
                    setAnoPublicacao(e.target.value.replace(/\D/g, ""));
                    setErroAno("");
                }}
              />
                {erroAno && (
                    <p id="ano-erro" className="formulario__erro" role="alert">
                        {erroAno}
                    </p>
                )}
            </div>

            <div className="formulario__campo">
              <label className="formulario__rotulo" htmlFor="categoria">
                Categoria
              </label>
              <select
                id="categoria"
                className="formulario__input"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
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
          </div>

          <div className="formulario__acoes">
            <button
              type="button"
              className="formulario__botao formulario__botao--cancelar"
              onClick={() => propsTelaAtiva("Listagem")}
            >
              Cancelar
            </button>
            <button type="submit" className="formulario__botao formulario__botao--adicionar">
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Cadastro;
