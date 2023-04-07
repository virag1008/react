import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const result = useSelector((state) => state.cartData);

  return (
    <div className="header">
      <Link to={"/"}>
        <img
          className="shopify"
          src="https://logos-world.net/wp-content/uploads/2020/11/Shopify-Symbol.png"
          alt="shopift_img"
        />
      </Link>
      <Link to={"/cart"}>
        <div className="classDiv">
          <span> {result.length} </span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png"
            alt="img"
          />
        </div>
      </Link>
    </div>
  );
};

export default Header;
