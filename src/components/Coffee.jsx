import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/Coffee.css";

const Coffee = () => {
  const [coffeeData, setCoffeeData] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function getData() {
      setCoffeeData("loading coffee");
      let data = await fetch(`https://fake-coffee-api.vercel.app/api/${id}`);
      let pureData = await data.json();
      setCoffeeData(pureData);
      console.log(pureData);
    }
    getData();
  }, [id]);

  return (
    <div>
      <header className="navbar">
      <nav>
          <ul>
            <li>
              <Link to="/" className="home">
                <img
                  src="../images/homeIcon.png"
                  alt="Home"
                  className="home-icon"
                />
                BRITT'S BREWS
              </Link>
            </li>
            <li>
              <Link to="/shop" className="shop">SHOP</Link>
            </li>
            <li>
              <Link to="/cart" className="cart">
              <img
                  src="../images/cart.png"
                  alt="cart"
                  className="cart-icon"
                />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {coffeeData === null ? (
        <p>Loading coffee...</p>
      ) : (
        <pre>{JSON.stringify(coffeeData)}</pre>
      )}
    </div>
  );
};

export default Coffee;
