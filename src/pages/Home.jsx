import React from "react";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import MenuHome from "../components/MenuHome";
import ReservationHome from "../components/ReservationHome";
import TopList from "../components/TopList";
import Opinions from "../components/Opinions";
import WhyChooseUs from "../components/WhyChooseUs"
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

function Home() {
    return (
        <div className="relative overflow-hidden">
            
            <Nav />
            <Hero />
            <TopList />
            <MenuHome />
            <ReservationHome />
            <Opinions />
            <WhyChooseUs />
            <ContactUs />
            
            <Footer />
        </div>
    )
}

export default Home;
