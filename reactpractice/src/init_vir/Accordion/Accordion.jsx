import React, { useState } from "react";

function Accordion({id, question, answer }) {

    const [show,setshow] = useState(false)

  return (
    <>
      <div className="Qmark">
          <p className="btn" onClick={() => setshow(!show) } > { show ? '➖' : '➕' }  </p>
          <h4 className="abc"> {question} </h4>
      </div>
      {
        show && <p className="ques">{answer} </p>
      }
    </>
  );
}

export default Accordion;
