import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/Shop.css";
import Coffee from "./Coffee";

const Shop = () => {
  const [coffeeData, setCoffeeData] = useState(null);
  const [chosenCoffee, setChosenCoffee] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getData(items = 20) {
      let data = await fetch(
        `https://fake-coffee-api.vercel.app/api?limit=${items}`
      );
      let pureData = await data.json();
      setCoffeeData(pureData);
    }
    getData(6);
  }, []);

  useEffect(() => {
    if (id) {
      // Check if ID exists in the URL
      const chosenCoffee = coffeeData?.find(
        (coffee) => coffee.id === Number(id)
      );
      setChosenCoffee(chosenCoffee);
    }
  }, [coffeeData, id]);

  return (
    <div className="shopContainer">
      {coffeeData ? (
        <div className="coffeeGrid">
          {coffeeData.map((coffee) => (
            <div className="coffeeItems" key={coffee.id}>
              <Link to={`/coffee/${coffee.id}`}>
                <img
                  className="coffeeImage"
                  src={coffee.image_url}
                  alt={coffee.name}
                />
              </Link>
              <div className="coffeeInfo">
                <p>{coffee.name}</p>
                <p>Price: ${coffee.price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading coffees...</p>
      )}
      {chosenCoffee && <Coffee coffee={chosenCoffee} />}
    </div>
  );
};

export default Shop;
