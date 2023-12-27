import React from "react";
import Navbar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";

function App(){
    return (
        <>
        <Navbar searchData={""}/> 
        <Hero/>
        </>
    )
}

export default App;