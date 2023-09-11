import "./css/Header.css";
import { AiOutlineSearch, AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        {/**logo */}

        <AiOutlineSearch className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello Guest</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>
        <div className="header_option">
          {" "}
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Order</span>
        </div>
        <div className="header_option">
          {" "}
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <Link to='/checkout'>
          <div className="header_optionBasket">
            {/** basketlogo */}
            <AiOutlineShopping />
            <span className="header_optionLineTwo header_basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;