import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import account from "../../assets/account.png";

function Header() {
  return (
    <header className="header">
      <section className="header__section">
        <div className="header__left">
          <Link to="/">
            <img className="header__logo" src={logo} alt="logo" />
          </Link>
          <h1 className="header__title">Show Finds</h1>
        </div>
        <div className="header__right">
          <Link to="/search">
            <input
              className="header__search"
              name="search"
              type="search"
              placeholder="Search..."
            ></input>
          </Link>
          <img className="header__image" src={account} alt="user-icon" />
        </div>
      </section>
    </header>
  );
}

export default Header;
