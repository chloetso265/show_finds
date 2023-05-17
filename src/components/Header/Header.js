import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import account from "../../assets/account.png";

function Header() {
  const navigate = useNavigate();
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      navigate({
        pathname: "/search",
        search: "?query=" + event.target.value,
      });
    }
    console.log("What is ", event.target.value);
  };

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
          <input
            className="header__search"
            name="search"
            type="search"
            placeholder="Search..."
            onKeyDown={handleSearch}
          ></input>

          <img className="header__image" src={account} alt="user-icon" />
        </div>
      </section>
    </header>
  );
}

export default Header;
