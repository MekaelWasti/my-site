import React from "react";

import DrawingPad from "./HDR components/DrawingPad";

const HandwrittenDigitRecognizer = () => {
  const saveDrawing = (imageData) => {
    // Do something with the image data (e.g., save it, display it, etc.)
    console.log("Image Data:", imageData);
    const link = document.createElement("a");
    link.href = imageData;
    link.download = "drawing.png";
    link.click();
  };

  return (
    <div>
      {/* <h1 className="project-title">Handwritten Digit Recognizer</h1> */}
      <h1 className="project-title">HANDWRITTEN DIGIT RECOGNIZER</h1>

      <div className="hdr-app">
        <div className="drawing-section">
          <h2>DRAW YOUR DIGIT</h2>

          {/* Add Drawing Pad */}
          <DrawingPad onSaveDrawing={saveDrawing}></DrawingPad>

          {/* <button className="recognize-button" onClick={saveDrawing}>
            RECOGNIZE
          </button>
          <button className="clear-button">CLEAR</button> */}
        </div>
        <div className="prediction-section">
          <h2>PREDICTED DIGIT</h2>
          {/* <h3>RESULT</h3> */}
          <h3 id="result">DRAW AN IMAGE</h3>
        </div>
      </div>
    </div>
  );
};

export default HandwrittenDigitRecognizer;
