import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homeContainer">
      <h1 className="coffeeMessage">WE HAVE THE BREW FOR YOU</h1>
      <Link to="shop" className="shopNow">
        SHOP NOW
      </Link>
    </div>
  );
}

export default Home;
