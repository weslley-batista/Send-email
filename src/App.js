import { useState } from 'react';
import './App.css';
import emailJs from '@emailjs/browser';

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

function sendEmail(e) {
  e.preventDefault();

  if(name === "" || email === "" || message === ""){
    alert("Preencha todos os campos");
    return;
  }

  const templateParams = {
    from_name: name,
    email: email,
    message: message
  }

  emailJs.send("service_jlw082k", "template_vhaolt5", templateParams, "tHmn9c3pgcevYdrcu")
  .then((response) => {
    console.log("Enviado", response.status, response.text);
    sendEmail("")
    setName("")
    setMessage("")
  }, (erro) => {
    console.log("Erro: ", erro)
  })
}

  return (
    <div className="container">
      <h1 className="title">Contato</h1>

      <form className="form" onSubmit={sendEmail}>
        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Enviar" />
      </form>

    </div>
  );
}

export default App;
