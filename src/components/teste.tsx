import "../index.css"
import "./homepage.css"
import logo from "../assets/MARCA EVELYN NADINE-03.png"
import { Link } from "react-router-dom"
function Page () {
    return (
        <div>
            <div className="container-all-page">
            <div className="container-header">
                <img className="logo-photo-header" src = {logo}></img>
                <div>
                    <li>
                        <ul>
                           <Link className="links-header" to="/cadastro">Cadastro</Link> 
                        </ul>
                        <ul>
                            
                        </ul>
                    </li>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Page