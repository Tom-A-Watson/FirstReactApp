import "./styles.css";
import React, { useState } from "react";

const sorryMessage = "Sorry, you have reached the ";

const AppLayout = () => {
  const [num, setNum] = useState(0);

  const incNumber = () => {
    if (num < 150) {
      setNum(num + 10);
    } else {
      alert(sorryMessage + "positive limit");
    }
  };

  const decNumber = () => {
    if (num > -150) {
      setNum(num - 10);
    } else {
      alert(sorryMessage + "negative limit");
    }
  };

  const reset = () => {
    setNum(0);
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> {num} </h1>
          <div className="btn_div">
            <button onClick={incNumber}> + 10 </button>
            <button onClick={decNumber}> - 10 </button>
            <button onClick={reset}> Reset </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
