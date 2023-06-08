import React, { useRef, useEffect } from "react";

const DrawingPad = ({ onSaveDrawing }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Dynamic Size
    const parentDiv = canvas.parentNode;
    canvas.width = parentDiv.offsetWidth;
    canvas.height = parentDiv.offsetHeight;

    context.fillStyle = "#171717";
    context.fillRect(0, 0, canvas.width * 2, canvas.height * 2);

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    // const startDrawing = (e) => {
    // isDrawing = true;
    // [lastX, lastY] = [e.offsetX, e.offsetY];
    // };

    const startDrawing = (e) => {
      const rect = canvas.getBoundingClientRect();
      e.preventDefault();
      isDrawing = true;
      [lastX, lastY] = [
        e.offsetX || e.touches[0].clientX - rect.left,
        e.offsetY || e.touches[0].clientY - rect.top,
      ];
    };

    const draw = (e) => {
      if (!isDrawing) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.offsetX || e.touches[0].clientX - rect.left;
      const y = e.offsetY || e.touches[0].clientY - rect.top;

      context.strokeStyle = "#FFFFFF";
      context.lineWidth = 13;
      // context.lineWidth = 6;
      // context.lineWidth = 2;
      context.lineJoin = "round";
      context.lineCap = "round";

      context.beginPath();
      context.moveTo(lastX, lastY);
      context.lineTo(x, y);
      context.stroke();
      [lastX, lastY] = [x, y];
    };

    const stopDrawing = (e) => {
      e.preventDefault();
      isDrawing = false;
    };

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);

    canvas.addEventListener("touchstart", startDrawing);
    canvas.addEventListener("touchmove", draw);
    canvas.addEventListener("touchend", (e) => stopDrawing(e));
    canvas.addEventListener("touchcancel", (e) => stopDrawing(e));

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mouseout", stopDrawing);
    };
  }, []);

  const saveDrawing = async () => {
    const canvas = canvasRef.current;
    // const context = canvas.getContext("2d");

    // Convert canvas to data URL
    const imageData = canvas.toDataURL("image/png");

    try {
      // const response = await fetch("http://127.0.0.1:5000/predict", {
      // const response = await fetch("https://99.232.136.159:63030/predict", {
      const response = await fetch(
        "https://api.mekaelwasti.com:63030/predict",
        {
          // const response = await fetch(
          // "https://mekaelwasti-mekaelwasti.vercel.app/predict",
          // {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(imageData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const result = data.result;
        console.log(result);

        let digitInWord = "";

        switch (result) {
          case 0:
            digitInWord = "ZERO";
            break;
          case 1:
            digitInWord = "ONE";
            break;
          case 2:
            digitInWord = "TWO";
            break;
          case 3:
            digitInWord = "THREE";
            break;
          case 4:
            digitInWord = "FOUR";
            break;
          case 5:
            digitInWord = "FIVE";
            break;
          case 6:
            digitInWord = "SIX";
            break;
          case 7:
            digitInWord = "SEVEN";
            break;
          case 8:
            digitInWord = "EIGHT";
            break;
          case 9:
            digitInWord = "NINE";
            break;
          default:
            digitInWord = "N/A";
        }

        document.getElementById("result").innerHTML =
          result + " | " + digitInWord;
      } else {
        console.log("Request Failed with status:", response.status);
      }
    } catch (e) {
      console.log("Error");
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="drawing-section">
      <div style={{ border: "1px solid white" }}>
        <canvas ref={canvasRef} style={{ width: "100%", height: "40vh" }} />
      </div>
      <button className="recognize-button" onClick={saveDrawing}>
        RECOGNIZE
      </button>
      <button className="clear-button" onClick={clearCanvas}>
        CLEAR
      </button>
    </div>
  );
};

export default DrawingPad;
