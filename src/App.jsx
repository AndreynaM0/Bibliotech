import { useEffect, useState } from 'react'
import Cadastro from './components/Cadastro'
import Listagem from './components/Listagem'

function App() {
  const [telaAtiva, setTelaAtiva] = useState("Listagem");
  const [livros, setLivros] = useState([]);

  useEffect(()=>{
    console.log(livros)
  },[livros])


  return (
    <>  
    {telaAtiva === "Listagem" ? 
    <Listagem propsTelaAtiva={setTelaAtiva} propsLivros={livros} propsAtualizarLivros={setLivros}/> :
    <Cadastro propsTelaAtiva={setTelaAtiva} propsLivros={livros} propsAtualizarLivros={setLivros}/>}

      
    </>
  )
}

export default App
