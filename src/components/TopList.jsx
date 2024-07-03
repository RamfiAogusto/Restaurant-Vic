import React, { useEffect, useState } from "react";
import CardPlate from "./CardPlate";
import imgtomate1 from "../assets/imgVegetales/tomate1.png";
import platecarne from "../assets/platecarne.png";
import ensalada from "../assets/ensalada.png";
import { motion } from "framer-motion";

function TopList() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <motion.div className="flex flex-col items-center px-20 py-24">
            <h2 className="text-5xl font-bold mb-7">Top List</h2>
            <p className="max-w-screen-sm text-center">
                Discover our most acclaimed dishes, creations that have
                conquered palates and become favorites among our diners. A
                selection that reflects the essence of our cuisine.
            </p>
            <div className="relative">
                <motion.div
                    className="flex justify-center py-11 gap-6"
                    drag={isMobile ? "x" : false}
                    dragConstraints={isMobile ? { left: -300, right: 300 } : {}}
                >
                    <CardPlate precio="" img={platecarne} />
                    <CardPlate precio="" />
                    <CardPlate precio="" img={ensalada} />
                </motion.div>
                <img
                    src={imgtomate1}
                    className="absolute -top-56 -left-16 lg:-left-96 blur-sm"
                />
                <img
                    src={imgtomate1}
                    className="absolute -bottom-20 left-24 lg:-right-36 lg:top-96 -z-10 rotate-45 w-52"
                />
            </div>
        </motion.div>
    );
}

export default TopList;
