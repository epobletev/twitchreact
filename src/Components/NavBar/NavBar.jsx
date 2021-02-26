import '../NavBar/Navbar.css'
import { MenuItems } from './MenuItems'
//<i className="fab fa-react"></i>
export const NavBar = ({streamername , image , status })=>{
    let message = status === true ? 'Esta en Vivo!' : 'Esta offline'
    return(
        <nav className="NavbarItems">
           <h1 className="navbar-logo">{streamername} {message}<img className="avatar" src={image} alt="Avatar"></img></h1>
            <ul className ='nav-menu'>
                {MenuItems.map((item,index)=>{
                    return <li key={index}>
                        <a className={item.cName} href={item.url} target="_blank" rel="noreferrer">{item.title}
                        </a></li>
                })}
            </ul>
        </nav>
    )
}