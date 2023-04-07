import Header from "./component/Header";
import Main from "./component/Main";
import Cart from "./component/Cart";
import "./Style.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
