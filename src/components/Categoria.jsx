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
            className="h-40 min-w-80 sm:min-w-[600px] max-w-[500px] rounded-lg font-extrabold text-3xl overflow-hidden"
        >
            <div className="h-full w-full p-5 flex items-center justify-end bg-gradient-to-l from-black to-transparent">
                {category}
            </div>
        </Link>
    );
}

export default Categoria;
