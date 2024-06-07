import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Hero from "./Hero";

function Home() {
  return (
    <div style={{display: 'flex'}}>
      <Sidebar />
      <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default Home;
