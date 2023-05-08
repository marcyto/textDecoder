import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import avatar from './assets/img_avatar.svg';

function App() {
  const [message, setMessage] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci montes, sit et diam risus scelerisque vitae est. Tortor maecenas nunc ut laoreet. Eget diam mauris quam quisque ut eget fringilla sit elit. Libero, sodales duis fames id diam feugiat aliquet non egestas.');
  const [messageCriptografada, setMessageCriptografada] = useState(``);


  function copy(message){
    let menssagem = message;
    navigator.clipboard.writeText(menssagem)
    .then(()=>{
      console.log("Texto copiado com sucesso");
    })
    .catch((err)=>{
      console.log('Erro ao copiar o texto.', err);
    })
  }

  function criptografa(message){
    let mensagem = message;
    let mensagemCripto = mensagem.replace(/[aeiou]/g, function(match){
      switch(match){
        case "a":
          return "ai";
        case "e":
          return "enter";
        case "i":
          return "imes";
        case "o":
          return "ober";
        case "u":
          return "ufat"; 
      }
    }); 
    setMessageCriptografada(mensagemCripto);
  }

  function descriptografa(message){
    let mensagemDescriptografada = message.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
    setMessageCriptografada(mensagemDescriptografada);
  }

  return (
    <div className="container">
      <Header/>
      <div className='content'>
        <div className='input_area'>
          <div className='obs'> 
            <textarea placeholder='Digite seu texto' onChange={(e)=> setMessage(e.target.value)}></textarea>
            <p>Apenas letras minúsculas e sem acento.</p>
          </div>
          <div className='btn_area'>
            
            <button className='criptografar_btn' onClick={()=> criptografa(message)}>Criptografar</button>
            <button className='criptografar_btn des' onClick={()=> descriptografa(message)}>Descriptografar</button>
          </div>
        </div>
        {
          message === '' ? (
            <div className='txt_area'>
              <div className='img_avatar'>
                <img src={avatar}/>
              </div>
              
              <h1>Nenhuma mensagem<br/>encontrada</h1>
              <p>Digite um texto que você deseja <br/>criptografar ou descriptografar</p>
            </div>
          ) : (
            <div className='txt_area_txt'>
              <p>{messageCriptografada}</p>
              <button className='criptografar_btn des' onClick={()=> copy(messageCriptografada)}>Copiar</button>
            </div>
            )
        }
      </div>
    </div>
  )
}

export default App
