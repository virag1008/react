import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [mydata, setmyData] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  //   useEffect(() => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => setmyData(res.data))
  //       .catch((error) => setErrorMsg(error.message));
  //   }, []);

  const getApiData = async () => {
    try {
      const resp = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setmyData(resp.data);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2> AXIOS tutorial </h2>
      {errorMsg !== "" && <h2>{errorMsg}</h2>}
      <div>
        {mydata.map((post) => {
          const { id, title, body } = post;
          return (
            <div key={id}>
              <h3> {title} </h3>
              <p>{body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
