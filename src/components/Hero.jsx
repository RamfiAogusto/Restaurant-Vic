import React from "react";
import back from "../assets/food-back.jpg";
function Hero() {
    return (
        <div className="relative">
            <div
                className="hero min-h-screen justify-start px-8 lg:px-20 bg-[-470px] lg:bg-center"
                style={{
                    backgroundImage: `url(${back})`,
                }}
            >
                <div className="hero-content text-left text-neutral-content ">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl font-bold">
                            Flavors that Awaken Passions
                        </h1>
                        <p className="mb-5">
                            Welcome to a unique culinary experience where every
                            dish tells a story. Immerse yourself in a world of
                            exquisite flavors and a cozy atmosphere.
                        </p>
                        <button className="btn btn-primary">
                            Have reservation
                        </button>
                    </div>
                </div>
            </div>
            <div className="min-w-full h-9 absolute bottom-0 bg-gradient-to-b from-transparent to-base-100 z-30"></div>
        </div>
    );
}

export default Hero;
