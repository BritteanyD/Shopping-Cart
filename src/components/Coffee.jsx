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
    <div>
      {coffeeData === null ? (
        <p>Loading coffee...</p>
      ) : (
        <pre>{JSON.stringify(coffeeData)}</pre>
      )}
    </div>
  );
};

export default Coffee;
