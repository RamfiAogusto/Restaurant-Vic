import React from "react";
import { Link } from "react-router-dom";
import imgfondo from "../assets/food-back.jpg";

function Categoria({ category, link }) {
    return (
        <Link
            to={link}
            style={{
                backgroundImage: `url(${imgfondo})`,
                backgroundSize: "cover",
            }}
            className="h-40 w-full rounded-lg font-extrabold text-3xl"
        >
            <div className="h-full w-full p-5 flex items-center justify-end bg-gradient-to-l from-black to-transparent">
                {category}
            </div>
        </Link>
    );
}

export default Categoria;
