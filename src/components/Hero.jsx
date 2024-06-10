import React from "react";
import back from "../assets/food-back.jpg";
function Hero() {
    return (
        <div className="relative">
            
            <div
                className="hero min-h-screen justify-start px-20"
                style={{
                    backgroundImage: `url(${back})`,
                }}
            >
                <div className="hero-content text-left text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl font-bold">
                            Hello there this is my title
                        </h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Veritatis quo illum tempore nobis libero optio
                            dolore ducimus dicta itaque.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="min-w-full h-9 absolute bottom-0 bg-gradient-to-b from-transparent to-base-100 z-30"></div>
        </div>
    );
}

export default Hero;
