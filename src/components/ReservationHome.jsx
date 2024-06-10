import React from "react";
import imgPlate from "../assets/chicken-steak-with-lemon-tomato-chili-carrot-white-plate-removebg-preview.png"


function ReservationHome() {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 px-20">
                <div className="hero-content flex-col lg:flex-row-reverse gap-0">
                    <img
                        src={imgPlate}
                        className="lg:min-w-[700px]"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Do you have any dinner plan today? Reserve you table</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Have reservation</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReservationHome;
