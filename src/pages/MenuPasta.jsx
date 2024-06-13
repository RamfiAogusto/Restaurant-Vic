import React from "react";
import CardPlate from "../components/CardPlate";
import pasta from "../assets/pastas.png"
function MenuPasta() {
    return (
        <div className="py-20 px-4 flex flex-col gap-3 justify-center items-center">
            <CardPlate img={pasta}/>
            <CardPlate img={pasta}/>
            <CardPlate img={pasta}/>
            <CardPlate img={pasta}/>
            <CardPlate img={pasta}/>
            <CardPlate img={pasta}/>
            <CardPlate img={pasta}/>
            <CardPlate img={pasta}/>
            <CardPlate img={pasta}/>
            <CardPlate img={pasta}/>
            <CardPlate img={pasta}/>
            <CardPlate img={pasta}/>
        </div>
    );
}

export default MenuPasta;
