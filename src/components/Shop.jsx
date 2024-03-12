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
    <div>
      {coffeeData ? (
        <ul>
          {coffeeData.map((coffee) => (
            <li key={coffee.id}>
              <Link to={`/coffee/${coffee.id}`}>{coffee.name}</Link>
              <p>{coffee.description}</p>
              <p>Price: ${coffee.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading coffees...</p>
      )}
      {chosenCoffee && <Coffee coffee={chosenCoffee} />}
    </div>
  );
};

export default Shop;
