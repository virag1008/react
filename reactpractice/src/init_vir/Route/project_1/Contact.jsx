import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const xyz = useNavigate();

  // const newFunction = (abc) => {xyz(abc)}

  return (
    <div>
      <h1>Hii , I am Contact page</h1>

      <p> we can navigate to about and booking page also by using following button </p>

      <button onClick={() => { xyz("/")}}>
        Go To About page
      </button>
      <p></p>
      <button onClick={() => { xyz("/booking")}}>
        Go To Booking page
      </button>

      {/* Another way to navigate using function ...but 1st method is simple */}

      {/* <button onClick={() => { newFunction("/")}}>
        Go To About page
      </button>
      <p></p>
      <button onClick={() => { newFunction("/booking")}}>
        Go To Booking page
      </button> */}
    </div>
  );
}

export default Contact;