import "../styles/cadastro.css";
import { useState } from "react";

function Cadastro({propsTelaAtiva, propsLivros, propsAtualizarLivros}) {
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [anoPublicacao, setAnoPublicacao] = useState("");
    const [categoria, setCategoria] = useState("Aventura");

    // atualizar a propriedade de livros

    const handleCadastrarLivro = (e)=>{
        e.preventDefault()

        const informacoesLivro ={
            titulo: titulo,
            autor: autor,
            anoPublicacao: anoPublicacao,
            categoria: categoria,
            statusLivro: "Disponível"
        }

        propsAtualizarLivros([...propsLivros,informacoesLivro]);
        
        propsTelaAtiva("Listagem")

    }

    return (
        <div className="cadastro">
            <h1>Cadastro de Livros</h1>

            <div className="formulario">
                <form onSubmit={handleCadastrarLivro}>
                    <input type="text" placeholder="Título do livro" 
                    value={titulo} onChange={e => setTitulo(e.target.value)} // guardar o valor do disparo do evento
                    />

                    <input type="text" placeholder="Autor do livro"
                    value={autor} onChange={e => setAutor(e.target.value)}
                    />


                    <input type="text" placeholder="Ano de publicação" 
                    value={anoPublicacao} onChange={e => setAnoPublicacao(e.target.value)}
                    />


                    <select 
                        value={categoria} onChange={e => setCategoria(e.target.value)}
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
                    <button>Adicionar</button>
                </form>
            </div>
        </div>

    )
}

export default Cadastro;