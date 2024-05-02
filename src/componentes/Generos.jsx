
import React from "react"

export default function Generos ({mostrarGeneros}) {
    return (<>
    
        {mostrarGeneros && 
        <ul className='lista-generos'>
            <li>
                <a href=""> Rock </a>
            </li>
            <li>
                <a href=""> Pop </a>
            </li>
            <li> 
                <a href=""> Salsa </a>
            </li>
            <li>
                <a href=""> Clásica </a>
            </li>
    </ul>}
    
    </>)
}