import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shop from "./Shop.jsx";
import Cart from "./Cart.jsx";
import Coffee from "./Coffee.jsx";
import Nav from "./Nav.jsx";
import Error from "../Error.jsx";
import Home from "./Home.jsx";

//wrapper component that includes the Nav and an Outlet for child routes
const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

//update router configuration to use the Layout component and nested routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> }, //Default path rendering the Home component
      { path: "shop", element: <Shop /> },
      { path: "coffee/:id", element: <Coffee /> },
      { path: "cart", element: <Cart /> },
    ],
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
