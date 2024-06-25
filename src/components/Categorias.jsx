import React from "react";
import Categoria from "./Categoria";


function Categorias() {
    return (
        <div className="flex flex-col items-center px-11">
            <h2 className="text-4xl font-bold mb-10 ">Categorias</h2>
            <div className="flex flex-col gap-4 items-center">
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
