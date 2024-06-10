import React, { useRef, useEffect } from "react";
import CardPlate from "./CardPlate";
import cilantro from "../assets/imgVegetales/cilantro1.png";
/* ---------imágenes platos-------- */

import ensalada from "../assets/ensalada.png";
import pastas from "../assets/pastas.png";
import pizza from "../assets/pizza.png";
import platecarne from "../assets/platecarne.png";

function MenuHome() {
    const inputRef = useRef(null);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    }, []);

    return (
        <div className="px-20 py-11 relative overflow-visible">
            <img
                src={cilantro}
                className="absolute z-10 w-96 -top-32 -right-32 -rotate-90 blur-sm"
            />
            <h2 className="text-5xl mb-6 font-bold">Menu</h2>
            <div role="tablist" className="tabs tabs-lifted ">
                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab max-w-32 min-w-32 font-bold text-lg"
                    aria-label="Burger"
                    ref={inputRef}
                />
                <div
                    role="tabpanel"
                    className="tab-content bg-base-100 border-base-300 rounded-box p-6"
                >
                    <div className="flex gap-4 justify-center flex-wrap">
                        <CardPlate />
                        <CardPlate />
                        <CardPlate />
                        <CardPlate />
                        <CardPlate />
                        <CardPlate />
                        <CardPlate />
                        <CardPlate />
                    </div>
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab max-w-32 min-w-32 font-bold text-lg"
                    aria-label="Meats"
                />
                <div
                    role="tabpanel"
                    className="tab-content bg-base-100 border-base-300 rounded-box p-6"
                >
                    <div className="flex gap-4 justify-center flex-wrap">
                        <CardPlate img={platecarne} />
                        <CardPlate img={platecarne} />
                        <CardPlate img={platecarne} />
                        <CardPlate img={platecarne} />
                        <CardPlate img={platecarne} />
                    </div>
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab max-w-32 min-w-32 font-bold text-lg"
                    aria-label="Pizza"
                />
                <div
                    role="tabpanel"
                    className="tab-content bg-base-100 border-base-300 rounded-box p-6"
                >
                    <div className="flex gap-4 justify-center flex-wrap">
                        <CardPlate img={pizza} />
                        <CardPlate img={pizza} />
                        <CardPlate img={pizza} />
                        <CardPlate img={pizza} />
                        <CardPlate img={pizza} />
                        <CardPlate img={pizza} />
                    </div>
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab max-w-32 min-w-32 font-bold text-lg"
                    aria-label="Salads"
                />
                <div
                    role="tabpanel"
                    className="tab-content bg-base-100 border-base-300 rounded-box p-6"
                >
                    <div className="flex gap-4 justify-center flex-wrap">
                        <CardPlate img={ensalada} />
                        <CardPlate img={ensalada} />
                        <CardPlate img={ensalada} />
                        <CardPlate img={ensalada} />
                        <CardPlate img={ensalada} />
                    </div>
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab max-w-32 min-w-32 font-bold text-lg"
                    aria-label="Pasta"
                />
                <div
                    role="tabpanel"
                    className="tab-content bg-base-100 border-base-300 rounded-box p-6"
                >
                    <div className="flex gap-4 justify-center flex-wrap">
                        <CardPlate img={pastas} />
                        <CardPlate img={pastas} />
                        <CardPlate img={pastas} />
                        <CardPlate img={pastas} />
                        <CardPlate img={pastas} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuHome;
