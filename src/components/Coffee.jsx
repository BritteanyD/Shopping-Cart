import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
    <div className="coffeeContainer">
      {coffeeData === null ? (
        <p>Loading coffee...</p>
      ) : (
        <div>
          <h2>{coffeeData.name}</h2>
          <pre>
            <code>{JSON.stringify(coffeeData, null, 2)}</code>
          </pre>
          <button onClick={onAdd}>Add to Cart</button>
        </div>
      )}
    </div>
  );
};

export default Coffee;
