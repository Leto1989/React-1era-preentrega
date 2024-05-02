import './ComponenteNavbar.css';
import './ComponenteAnchor'
import React from "react"
import ComponenteAnchor from './ComponenteAnchor';

export default function Generos ({mostrarGeneros}) {
    return (<>
    
        {mostrarGeneros && 
        <ul className='lista-generos'>
            <li>
                <ComponenteAnchor nombre='Rock' />
            </li>
            <li>
            <ComponenteAnchor nombre='Pop' />
            </li>
            <li> 
            <ComponenteAnchor nombre='Salsa' />
            </li>
            <li>
            <ComponenteAnchor nombre='Clásica' />
            </li>
    </ul>}
    
    </>)
}