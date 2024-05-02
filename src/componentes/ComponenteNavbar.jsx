import React, {useState} from 'react';
import './ComponenteNavbar.css';
import ComponenteAnchor from "./ComponenteAnchor";
import Generos from './Generos';

export default function ComponenteNavbar () {

    const [mostrarGeneros, setMostrarGeneros] = useState(false);

    const hoverGeneros = (hover) => {
        if (hover.type === 'mouseover') {
            setMostrarGeneros(true);
            console.log('Mostrar Géneros');
        } else if (hover.type === 'mouseout') {
            setMostrarGeneros(false);
        }
    };

    return (

        <nav className='navbar'>
            <div>
                <h1> MEDIA ALBUM </h1>
            </div>
        
                <ul className='lista-generos'>
                    <li onMouseOver={() => setMostrarGeneros(true)} onMouseOut={() => setMostrarGeneros(false)}>
                    <ComponenteAnchor nombre='Géneros'/>
                    {mostrarGeneros && <Generos />}
                    <Generos mostrarGeneros= {mostrarGeneros} />
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