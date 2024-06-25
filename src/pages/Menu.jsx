import React from "react";
import Recomendados from "../components/Recomendados";
import Categorias from "../components/Categorias";


function Menu() {
    return (
        <div className="overflow-hidden px-5 py-16 lg:p-20">
            <h2 className="text-4xl font-bold">Menu</h2>
            <div>
                <Recomendados />
                <Categorias />
            </div>
        </div>
    );
}

export default Menu;
