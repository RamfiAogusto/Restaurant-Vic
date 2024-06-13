import React from "react";
import CardPlate from "../components/CardPlate";
import pizza from "../assets/pizza.png"

function MenuPizza() {
    return (
        <div className="py-20 px-4 flex flex-col gap-3 justify-center items-center">
            <CardPlate img={pizza}/>
            <CardPlate img={pizza}/>
            <CardPlate img={pizza}/>
            <CardPlate img={pizza}/>
            <CardPlate img={pizza}/>
            <CardPlate img={pizza}/>
            <CardPlate img={pizza}/>
            <CardPlate img={pizza}/>
            <CardPlate img={pizza}/>
            <CardPlate img={pizza}/>
            <CardPlate img={pizza}/>
            <CardPlate img={pizza}/>
        </div>
    );
}

export default MenuPizza;
