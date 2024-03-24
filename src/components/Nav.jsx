import homeIcon from "../../images/homeIcon.png";
import cartIcon from "../../images/cart.png";
import { Link } from "react-router-dom";
import "../styles/App.css";

const Nav = ({ countCartItems }) => {
  console.log("how many", { countCartItems });
  return (
    <header className="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/" className="home">
              <img src={homeIcon} alt="Home" className="home-icon" />
              BRITT'S BREWS
            </Link>
          </li>
          <div className="nav2">
          <li>
            <Link to="/shop" className="shop">
              SHOP
            </Link>
          </li>
          <li>
            <Link to="/cart" className="cart">
              <img src={cartIcon} alt="cart" className="cart-icon" />
              {countCartItems > 0 && (
                <button className="cart-badge">{countCartItems}</button>
              )}
            </Link>
          </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
