import React, { useEffect, useState } from "react";
import './App.css';

function StatewiseCovidCase() {
  const [value, setvalue] = useState([]);

  useEffect(() => {
    getCovidData();
  }, []);

  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();

    setvalue(actualData.statewise);
  };


  return (
    <>
      <h1 style={{ textAlign: "center" }} className="mt-2">
        India Covid-19 Dashboard
      </h1>
      <div className="text-center mt-3">
        <table className="table table-hover">
          <thead className="p-3">
            <tr className="bg-info">
              <th> STATE </th>
              <th> CONFIRMED </th>
              <th> RECOVERD </th>
              <th> DEATHS </th>
              <th> ACTIVE </th>
              <th> UPDATED </th>
            </tr>
          </thead>

          <tbody>
            {value.map((x,y) => {
              return (
                <tr key = {y} >
                  <td> {x.state} </td>
                  <td> {x.confirmed} </td>
                  <td>{x.recovered} </td>
                  <td className="risk" > {x.deaths}</td>
                  <td> {x.active}</td>
                  <td> {x.lastupdatedtime} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StatewiseCovidCase;
