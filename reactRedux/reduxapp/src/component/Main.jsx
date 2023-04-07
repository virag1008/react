import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/action";
import { productList } from "../redux/productAction";

const Main = () => {
  const dispatch = useDispatch();

  const selector = useSelector((state) => state.productData);

  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <>
      <div className="product-container">
        {selector.map((item, index) => (
          <div className="product-item" key={item.id}>
            <img src={item.photo}></img>
            <h2> {item.name} </h2>
            <div>Category : {item.category} </div>
            <div>Color : {item.color} </div>
            <div>Brand : {item.brand} </div>
            <div>Price : {item.price} </div>
            <button onClick={() => dispatch(addToCart(item))}>
              add to cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Main;
