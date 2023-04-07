import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <h1 className="text-center text-bg-dark text-capitalize mt-0 p-3"> welcome to my Website</h1>

      <div className="container text-center" >
        <div className="row">
          <div className="col">
            <div className="card wid" >
              <img src="https://picsum.photos/200/300" height={'200px'} className="card-img-top"  />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" >
              <img src="https://picsum.photos/200/301"  height={'200px'} className="card-img-top"  />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" >
              <img src="https://picsum.photos/200/302"  height={'200px'} className="card-img-top"  />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
