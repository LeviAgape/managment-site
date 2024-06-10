import { useState } from 'react'
import ButtonHeader from './components/button' 
import logo from "./assets/MARCA EVELYN NADINE-03.png"
import './App.css'
import "./index.css"

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="container-all-page">
        <div className="container-header">
          <img className="photo-logo-header" src = {logo}></img>
          <form>
            <label>Nome</label>
            <input className="input-header" type="text" placeholder="seueamil@gmail.com"></input>
          </form>
          <form>
          <label>Senha</label>
            <input className="input-header" placeholder='123' type="password"></input>
            <ButtonHeader/>
          </form>
        </div>

      </div>
  )
}

export default App
