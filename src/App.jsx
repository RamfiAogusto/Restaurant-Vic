import React from "react";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Menu from "./pages/Menu";
import Nav from "./components/Nav";
import MenuBurger from "./pages/MenuBurger";
import MenuMeats from "./pages/MenuMeats";
import MenuPizza from "./pages/MenuPizza";
import MenuPasta from "./pages/MenuPasta";
import MenuSalads from "./pages/MenuSalads";
import AboutUs from "./pages/AboutUs";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <BrowserRouter>
        <ScrollToTop />
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Menu" element={<Menu />} />
                <Route path="/Menu/Burger" element={<MenuBurger />} />
                <Route path="/Menu/Meats" element={<MenuMeats />} />
                <Route path="/Menu/Pizza" element={<MenuPizza />} />
                <Route path="/Menu/Pasta" element={<MenuPasta />} />
                <Route path="/Menu/Salads" element={<MenuSalads />} />
                <Route path="/About-Us" element={<AboutUs />} />
                <Route path="/*" element={<h2 className="p-20 text-4xl">Que anda buscando? 🤔</h2>} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
