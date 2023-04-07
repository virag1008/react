import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../action/Index";

const Cart = () => {
  const selected = useSelector((state) => state.changeCount);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1>
          Home Component
          <span>
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
          <span className="added"> {selected} </span>
        </h1>
      </div>
      <div>
        <button onClick={() => dispatch(increment())}> Add To Cart </button>
        <button onClick={() => dispatch(decrement())}> Remove To Cart </button>
      </div>
    </>
  );
};

export default Cart;
