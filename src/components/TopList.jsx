import React from "react";
import CardPlate from "./CardPlate";
import imgtomate1 from "../assets/imgVegetales/tomate1.png"
function TopList() {
    return (
        <div className="flex flex-col items-center px-20 py-24">
            <h2 className="text-5xl font-bold mb-7">Top List</h2>
            <p className="max-w-screen-sm text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet non debitis tempore culpa obcaecati quis labore nam commodi laboriosam</p>
            <div className="flex justify-center py-11 gap-6 relative">
                <CardPlate />
                <CardPlate />
                <CardPlate />
                <img src={imgtomate1} className="absolute -left-96 blur-sm" />
                <img src={imgtomate1} className="absolute -right-36 top-96 -z-10 rotate-45 w-52" />
            </div>
        </div>
    );
}

export default TopList;
