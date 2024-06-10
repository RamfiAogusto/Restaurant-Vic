import React from "react";
import back from "../assets/281.jpg";
import burger from "../assets/tasty-burger-removebg-preview.png";
function CardPlate() {
    return (
        <div
            class="card min-w-64 max-w-64 shadow-xl gap-0"
            style={{ backgroundImage: `url(${back})`, backgroundSize: "cover" }}
        >
            <figure>
                <img src={burger} alt="Shoes" />
            </figure>
            <div className="absolute font-bold top-3 left-3 text-xl">$500.00</div>
            <div class="card-body pt-0 pb-5 px-4 ">
                <h2 class="card-title">
                    Burger
                    <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <div class="badge badge-outline">Fashion</div>
                    <div class="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
}

export default CardPlate;
