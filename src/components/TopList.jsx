import React from "react";
import CardPlate from "./CardPlate";
import imgtomate1 from "../assets/imgVegetales/tomate1.png";
import platecarne from "../assets/platecarne.png";
import ensalada from "../assets/ensalada.png";
function TopList() {
    return (
        <div className="flex flex-col items-center px-20 py-24">
            <h2 className="text-5xl font-bold mb-7">Top List</h2>
            <p className="max-w-screen-sm text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet non debitis tempore culpa obcaecati quis labore nam commodi laboriosam</p>
            <div className="flex justify-center py-11 gap-6 relative">
                <CardPlate precio="" img={platecarne}/>
                <CardPlate precio=""/>
                <CardPlate precio="" img={ensalada}/>
                <img src={imgtomate1} className="absolute -top-56 -left-16 lg:-left-96 blur-sm" />
                <img src={imgtomate1} className="absolute -bottom-20  left-24 lg:-right-36 lg:top-96 -z-10 rotate-45 w-52" />
            </div>
        </div>
    );
}

export default TopList;
