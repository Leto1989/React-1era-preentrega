import './ComponenteNavbar.css';
import ComponenteAnchor from "./ComponenteAnchor";

export default function ComponenteNavbar () {
    return (
        <nav className='navbar'>
        <div>
        <h1> MEDIA ALBUM </h1>
        </div>
        
        <ul>
            <li>
            <ComponenteAnchor nombre='Géneros' color='green'/>
            </li>
            <li>
            <ComponenteAnchor nombre='Carrito'/>
            </li>
            <li>
            <ComponenteAnchor nombre='Mi tienda'/>
            </li>
        </ul>
        
    </nav>
    )
}