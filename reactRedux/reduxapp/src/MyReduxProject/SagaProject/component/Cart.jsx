import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeToCart, clearCart } from "../redux/action";

const Cart = () => {
  const cartData = useSelector((state) => state.cartData);
  const dispatch = useDispatch();

  let amount =
    cartData.length &&
    cartData.map((item) => item.price).reduce((pre, next) => pre + next);

  return (
    <div className="cart_page">
      <Link to={"/"}> Home </Link>
      <h1> Wish List </h1>

      <table>
        <thead>
          <tr>
            <th> Name </th>
            <th> Color </th>
            <th> Price </th>
            <th> Brand </th>
            <th> Category </th>
          </tr>
        </thead>
        <tbody>
          .map
          {cartData((item, index) => (
            <tr key={index}>
              <td> {item.name}</td>
              <td> {item.color} </td>
              <td> {item.price} </td>
              <td> {item.brand} </td>
              <td> {item.category} </td>
              <td>
                <button onClick={() => dispatch(removeToCart(index))}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="amount_part">
        <table>
          <tr>
            <th> Amount </th>
            <td> {amount} </td>
          </tr>
          <tr>
            <th> 10% Discount </th>
            <td> - {amount / 10} </td>
          </tr>
          <tr>
            <th> Tax </th>
            <td> {amount / 20} </td>
          </tr>
          <tr>
            <th> Total </th>
            <td> {amount - amount / 10 + amount / 20} </td>
          </tr>
        </table>
        <button onClick={() => dispatch(clearCart())}>Empty Cart</button>
      </div>
    </div>
  );
};

export default Cart;
