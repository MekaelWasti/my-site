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
    context.fillRect(0, 0, canvas.width, canvas.height);

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    const startDrawing = (e) => {
      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY];
    };

    const draw = (e) => {
      if (!isDrawing) return;
      context.strokeStyle = "#FFFFFF";
      context.lineWidth = 6;
      context.lineJoin = "round";
      context.lineCap = "round";

      context.beginPath();
      context.moveTo(lastX, lastY);
      context.lineTo(e.offsetX, e.offsetY);
      context.stroke();
      [lastX, lastY] = [e.offsetX, e.offsetY];
    };

    const stopDrawing = () => {
      isDrawing = false;
    };

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mouseout", stopDrawing);
    };
  }, []);

  const saveDrawing = async () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Convert canvas to data URL
    const imageData = canvas.toDataURL("image/png");

    try {
      const response = await fetch("http://127.0.0.1:3000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(imageData),
      });
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
