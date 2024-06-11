import ButtonHeader from './components/button' 
import logo from "./assets/MARCA EVELYN NADINE-03.png"
import './App.css'
import "./index.css"

function App() {
  return (
      <div className="container-all-page">
        <div className="container-photo-logo">
        <img className="photo-logo-header" src = {logo}></img>

        </div>

        <div className="container-header">
          <form className="form-header">
            <ul>
              <li>
                <label>Nome</label>
                <input type="text" className="input-header"></input>
              </li>
            </ul>
            <ul>
              <li>
                <label>Senha</label>
                <input type="password" className="input-header"></input>
              </li>
            </ul>
            <ButtonHeader/>
          </form>
        </div>

      </div>
  )
}

export default App
