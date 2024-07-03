import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";
import CardPlate from "./CardPlate";
import imgtomate1 from "../assets/imgVegetales/tomate1.png";
import platecarne from "../assets/platecarne.png";
import ensalada from "../assets/ensalada.png";

function Recomendados() {
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
        <div>
            <motion.div className="w-full flex flex-col items-center sm:px-20 py-24">
                <h2 className="text-4xl font-bold  text-start mb-7 sm:text-center sm:text-5xl text-wrap">Recommended dishes</h2>
                
                <div className="relative">
                    <motion.div
                        className="flex py-11 gap-6"
                        drag={isMobile ? "x" : false}
                        dragConstraints={
                            isMobile ? { left: -300, right: 300 } : {}
                        }
                    >
                        <CardPlate precio="" img={platecarne} />
                        <CardPlate precio="" />
                        <CardPlate precio="" img={ensalada} />
                    </motion.div>
                    <img
                        src={imgtomate1}
                        className="absolute -top-56 -left-20 lg:-left-96 blur-sm"
                    />
                    <img
                        src={imgtomate1}
                        className="absolute -bottom-20 left-24 lg:-right-36 lg:top-96 -z-10 rotate-45 w-52"
                    />
                </div>
            </motion.div>
        </div>
    );
}

export default Recomendados;
