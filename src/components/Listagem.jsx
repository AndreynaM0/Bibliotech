import { useState } from "react";
import "../styles/listagem.css";

function Listagem({propsTelaAtiva,propsLivros,propsAtualizarLivros}) {

    const [filtroCategoria, setFiltroCategoria] = useState("Todas");
    const [filtroPesquisa, setFiltroPesquisa] = useState("");

    const handleEmprestarDevolver =(index) => {
        const listagemLivros = [...propsLivros];
        listagemLivros[index].statusLivro=listagemLivros[index].statusLivro === "Disponível" ? "Emprestado" : "Disponível"
        propsAtualizarLivros(listagemLivros);
    }

  return (
    <div>
      <h1>Listagem</h1>
      <input placeholder="pesquise seu livro" value={filtroPesquisa} onChange={e => setFiltroPesquisa(e.target.value)}/>
    
      <select 
            value={filtroCategoria} onChange={e => setFiltroCategoria(e.target.value)}
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

      <div>
        <button onClick={e =>propsTelaAtiva("Cadastro")}> Cadastrar </button>
      </div>
    
      <div>
        <ul>
            {propsLivros.map((livro,index) =>(
                 <li key={index}>
                <h3>
                    Livro: {livro.titulo}
                    <br/>
                    Autor: {livro.autor}
                    <br/>
                    Ano Publicação: {livro.anoPublicacao}
                    <br/>
                    Categoria: {livro.categoria}
                    <br/>
                    Status: {livro.statusLivro} 
                    <br/>
                    <button onClick={()=>handleEmprestarDevolver(index)}>{livro.statusLivro === "Disponível" ? "Emprestar":"Devolver"}</button>
                </h3>
            </li>
            ))}
        </ul>
      </div>

    </div>
  )
}

export default Listagem;