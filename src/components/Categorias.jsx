import React from "react";
import Categoria from "./Categoria";


function Categorias() {
    return (
        <div>
            <h2 className="text-4xl font-bold mb-4">Categorias</h2>
            <div className="flex flex-col gap-4">
                <Categoria category="Burger" link="Burger"/>
                <Categoria category="Meats" link="Meats"/>
                <Categoria category="Pizza" link="Pizza"/>
                <Categoria category="Pasta" link="Pasta"/>
                <Categoria category="Salads" link="Salads"/>
            </div>
        </div>
    );
}

export default Categorias;
