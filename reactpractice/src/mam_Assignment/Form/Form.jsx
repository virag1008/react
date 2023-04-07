import React from "react";
import { useState } from "react";
import "./App.css";

function Form() {
  const [current, setState] = useState({
    fname: "",
    lname: "",
    mob: "",
    mail: "",
    address: "",
    hotel: "",
    checkin: "",
    checkout: "",
  });

  const submitFun = (e) => {
    e.preventDefault();
    console.log(current);
    setState({
      fname: "",
      lname: "",
      mob: "",
      mail: "",
      address: "",
      hotel: "",
      checkin: "",
      checkout: "",
    });
  };

  const changeFun = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setState((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  return (
    <div className="maindiv">
      <div className="centerDiv">
        <form onSubmit={submitFun}>
          <label htmlFor="fname"></label>
            First Name :
            <input
              type="text"
              placeholder="enter your first name"
              id="fname"
              onChange={changeFun}
              name="fname"
              value={current.fname}
            />
          
          <br />
          <br />
          <label htmlFor="lname"></label>
            Last Name :
            <input
              type="text"
              placeholder="enter your last name"
              id="lname"
              name="lname"
              value={current.lname}
              onChange={changeFun}
            />
          
          <br />
          <br />
          <label htmlFor="mob"></label>
            Mob No. :
            <input
              type="number"
              placeholder="enter your mob no"
              id="mob"
              name="mob"
              value={current.mob}
              onChange={changeFun}
            />
          
          <br />
          <br />
          <label htmlFor="mail"></label>
            Email id :
            <input
              type="email"
              placeholder="enter your email id"
              id="mail"
              name="mail"
              value={current.mail}
              onChange={changeFun}
            />
          
          <br />
          <br />
          <label htmlFor="address">Address : </label>
          <textarea
            name="address"
            id="address"
            cols="25"
            rows="4"
            placeholder="enter your address"
            value={current.address}
            onChange={changeFun}
          ></textarea>
          <br />
          <br />
          <label htmlFor="hotel"></label>
            Select Hotel :
            <select name="hotel" id="hotel"  onChange={changeFun}>
              <option value={current.hotel}>Hotel Smart plaza</option>
              <option selected value={current.hotel}>Hotel Delicious </option>
              <option value={current.hotel}>Taj Hotel </option>
              <option value={current.hotel}>Hotel Jain (pure veg)</option>
            </select>
          
          <br />
          <br />
          <label htmlFor="checkin"></label>
            Check-In Date :
            <input
              type="date"
              id="checkin"
              value={current.checkin}
              onChange={changeFun}
              name="checkin"
            />
          
          <br />
          <br />
          <label htmlFor="checkout"> </label>
            Check-Out Date :
            <input
              type="date"
              id="checkout"
              name="checkout"
              value={current.checkout}
              onChange={changeFun}
            />
         
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Form;
