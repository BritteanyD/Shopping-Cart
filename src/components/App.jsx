import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shop from "./Shop.jsx";
import Cart from "./Cart.jsx";
import Coffee from "./Coffee.jsx";
import Nav from "./Nav.jsx";
import Error from "../Error.jsx";
import Home from "./Home.jsx";

//wrapper component that includes the Nav and an Outlet for child routes
const Layout = ({countCartItems}) => {
  return (
    <div>
      <Nav countCartItems={countCartItems}/>
      <Outlet />
    </div>
  );
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const totalItems = Object.values(cartItems).reduce((acc, item) => acc + item.qty, 0);
  const onAdd = (coffee) => {
    console.log("add coffee to cart", coffee)
    const exist = cartItems.find((x) => x.id === coffee.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === coffee.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...coffee, qty: 1 }]);
    }
  };

  const onRemove = (coffee) => {
    console.log("remove coffee from cart")
    const exist = cartItems.find((x) => x.id === coffee.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== coffee.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === coffee.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  //update router configuration to use the Layout component and nested routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout countCartItems={totalItems} />,
      children: [
        { path: "/", element: <Home /> }, //Default path rendering the Home component
        { path: "shop", element: <Shop /> },
        {
          path: "coffee/:id",
          element: <Coffee onAdd={onAdd} onRemove={onRemove} />,
        },
        {
          path: "cart",
          element: (
            <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
          ),
        },
      ],
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
