import React, { useState, useEffect } from "react";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const [product, setproduct] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setproduct(data);
    };
    fetchProduct();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="componentDiv">
      <h2>WELCOME TO OUR STORE</h2>

      <section>
        <h3> Products </h3>

        <div className="Outerdiv">
          {product.map((element) => {
            return (
              <div key={element.id} className="product">
                <div className="imgdiv">
                  <img
                    src={element.image}
                    alt="img-product"
                    className="imgStyle"
                  ></img>
                </div>

                <div>
                  <h2>{element.category}</h2>
                  <h3>{element.price} $</h3>
                  <button onClick={() => handleAdd(element)}>
                    {" "}
                    Add to Cart{" "}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
