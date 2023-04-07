import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div className="componentDiv">
      <h3> Cart </h3>
      <div>
        {products.map((product, id) => (
          <div key={id} className="product">
            <div className="imgdiv">
              <img src={product.image} alt="" className="imgStyle" />
            </div>

            <div>
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button onClick={() => handleRemove(product.id)}>
                {" "}
                remove from cart{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
