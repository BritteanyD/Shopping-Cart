import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/Coffee.css";

const Coffee = (props) => {
  const [coffeeData, setCoffeeData] = useState(null);
  const { id } = useParams();
  console.log(id);
  const { onAdd } = props;

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
    <div className="coffeeContainer">
      {coffeeData === null ? (
        <p>Loading coffee...</p>
      ) : (
        <div className="coffeeInfo">
          <h1>{coffeeData[0].name}</h1>
          <img src={coffeeData[0].image_url} />
          <h2>{coffeeData[0].description}</h2>
          <h2> Weight: {coffeeData[0].weight} grams</h2>
          <h2>Roast Level: {coffeeData[0].roast_level}</h2>
          <h2>${coffeeData[0].price}</h2>
          <button
            onClick={() => {
              const coffeeItem = {
                id: coffeeData[0].id,
                name: coffeeData[0].name,
                price: coffeeData[0].price,
              };
              onAdd(coffeeItem);
            }}
          >
            Add To Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Coffee;
