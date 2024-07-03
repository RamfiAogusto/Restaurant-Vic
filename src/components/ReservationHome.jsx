import React from "react";
import imgPlate from "../assets/chicken-steak-with-lemon-tomato-chili-carrot-white-plate-removebg-preview.png";
import cebolla1 from "../assets/imgVegetales/cebolla1.png";
import tomate1 from "../assets/imgVegetales/tomate1.png";
import vegpicados1 from "../assets/imgVegetales/vegpicados2.png";

function ReservationHome() {
    return (
        <div className="relative overflow-visible lg:px-20">
            <img
                src={cebolla1}
                className="absolute w-96 -top-28 -left-36 blur-sm rotate-90"
            />
            <img
                src={tomate1}
                className="absolute w-72 top-20 -right-32 -z-10 blur-sm"
            />
            <img
                src={vegpicados1}
                className="absolute w-96 -right-40 -bottom-52 lg:-bottom-72 lg:right-0 rotate-45 -z-10"
            />
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-0">
                    <img src={imgPlate} className="lg:min-w-[700px]" />
                    <div>
                        <h1 className="text-5xl font-bold">
                            Do you have any dinner plan today? Reserve you table
                        </h1>
                        <p className="py-6">
                            Make your evening special. Book now and let us
                            create unforgettable memories for you and your loved
                            ones in a unique and welcoming environment.
                        </p>
                        <button className="btn btn-primary">
                            Have reservation
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReservationHome;
