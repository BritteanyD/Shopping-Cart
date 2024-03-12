import homeIcon from '../../images/homeIcon.png';
import cartIcon from '../../images/cart.png';
import {Link} from 'react-router-dom';
import '../styles/App.css';

const Nav = () => {
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
                    <li>
                        <Link to="/shop" className="shop">SHOP</Link>
                    </li>
                    <li>
                        <Link to="/cart" className="cart">
                            <img src={cartIcon} alt="cart" className="cart-icon" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;