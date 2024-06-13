import React from "react";
import back from "../assets/281.jpg";
import burger from "../assets/tasty-burger-removebg-preview.png";
function CardPlate({ precio="$500.00", img = burger, name="Burger" }) {
    
    
    return (
        <div
            className="card min-w-64 max-w-64 shadow-xl gap-0"
            style={{ backgroundImage: `url(${back})`, backgroundSize: "cover" }}
        >
            <figure className="p-4">
                <img src={img} alt="Shoes" />
            </figure>
            <div className="absolute font-bold top-3 left-3 text-xl bg-black bg-opacity-45 rounded-sm p-1">
                {precio}
            </div>
            <div className="card-body pt-0 pb-5 px-4 ">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
}

export default CardPlate;
