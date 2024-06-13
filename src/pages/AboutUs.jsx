import React from "react";
import Opinions from "../components/Opinions";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactUs from "../components/ContactUs";


function AboutUs() {
    return (
        <div className="overflow-hidden">
            <Opinions />
            <WhyChooseUs />
            <ContactUs />
            
        </div>
    );
}

export default AboutUs;
