import React from "react";

const HandwrittenDigitRecognizer = () => {
  return (
    <div>
      <h1 className="title">Handwritten Digit Recognizer</h1>

      <div className="hdr-app">
        <div className="drawing-section">
          <h2>DRAW YOUR DIGIT</h2>
          <button className="recognize-button">RECOGNIZE</button>
          <button className="clear-button">CLEAR</button>
        </div>
        <div className="prediction-section">
          <h2>PREDICTED DIGIT</h2>
          {/* <h3>RESULT</h3> */}
          <h3>8 | EIGHT</h3>
        </div>
      </div>
    </div>
  );
};

export default HandwrittenDigitRecognizer;
