import React, {useState} from 'react';
import './ComponenteNavbar.css';
import ComponenteAnchor from "./ComponenteAnchor";
import Generos from './Generos';
import CartWidget from './CartWidget';

export default function ComponenteNavbar () {

    const [mostrarGeneros, setMostrarGeneros] = useState(false);

    
    return (

        <nav className='navbar'>
            <div>
                <h1> E - Discos </h1>
            </div>
        
                <ul>
                    <li onMouseOver={() => setMostrarGeneros(true)} onMouseOut={() => setMostrarGeneros(false)}>
                    <ComponenteAnchor nombre='Géneros'/>
                    {mostrarGeneros && <Generos />}
                    <Generos mostrarGeneros= {mostrarGeneros} />
                    </li>
                    <li>
                    <ComponenteAnchor nombre='Mi tienda'/>
                    </li>
                    <li>
                    <CartWidget />
                    </li>
                </ul>
        
        </nav>
    )
}