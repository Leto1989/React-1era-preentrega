import { useState } from "react";


export default function CartWidget () {
    const [cantidadCarrito, setCantidadCarrito] = useState(0);
    return (
        <div className="cart-widget">
            <i className="fas fa-shopping-cart"></i> 
            <span className="material-symbols-outlined icono-carrito">
                shopping_cart_checkout
            </span> 
        </div>
    );
}