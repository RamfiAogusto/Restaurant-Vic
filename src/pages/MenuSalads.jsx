import React from "react";
import CardPlate from "../components/CardPlate";
import salads from "../assets/ensalada.png";
function MenuSalads() {
    return (
        <div className="py-20 px-4 flex flex-col gap-3 justify-center items-center">
            <CardPlate img={salads}/>
            <CardPlate img={salads}/>
            <CardPlate img={salads}/>
            <CardPlate img={salads}/>
            <CardPlate img={salads}/>
            <CardPlate img={salads}/>
            <CardPlate img={salads}/>
            <CardPlate img={salads}/>
            <CardPlate img={salads}/>
            <CardPlate img={salads}/>
            <CardPlate img={salads}/>
            <CardPlate img={salads}/>
        </div>
    );
}

export default MenuSalads;
