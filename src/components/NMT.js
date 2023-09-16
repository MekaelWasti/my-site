import React, { useState } from "react";

const NMT = () => {
  // const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState("");

  const sendData = async (inputText) => {
    try {
      const response = await fetch(
        "https://api.mekaelwasti.com:63030/nmt_inference",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputText),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const result = data.result;
        console.log(result);
        setResultText(result);
      }
    } catch (e) {
      console.log("Error: NMT INFERENCE");
    }
  };

  const handleInputFieldUpdate = async (input) => {
    console.log("SENDING", input.target.value);

    // Check if input field is empty
    if (input.target.value.trim() !== "") {
      await sendData(input.target.value);
    }
  };

  return (
    <div>
      <h1 className="title">MULTILINGUAL NERUAL MACHINE TRANSLATION</h1>
      <div className="fullSection">
        <div className="language_selections">
          <div className="input_language">
            <h1>INPUT LANGUAGE</h1>
            {/* <label htmlFor="inputLanguage">SELECT A LANGUAGE</label> */}
            <select name="input_language_selection" id="inputLanguage">
              <option value="" disabled selected>
                SELECT A LANGUAGE
              </option>
              <option value="english">ENGLISH</option>
              <option value="filipino">FILIPINO</option>
              <option value="vietnamese">VIETNAMESE</option>
              <option value="chinese">CHINESE</option>
            </select>
          </div>
          <div className="target_language">
            <h1>TARGET LANGUAGE</h1>
            {/* <label htmlFor="targetLanguage">SELECT A LANGUAGE</label> */}
            <select name="target_language_selection" id="targetLanguage">
              <option value="" disabled selected>
                SELECT A LANGUAGE
              </option>
              <option value="english">ENGLISH</option>
              <option value="filipino">FILIPINO</option>
              <option value="vietnamese">VIETNAMESE</option>
              <option value="chinese">CHINESE</option>
            </select>
          </div>
        </div>
        <div className="input_fields">
          <div className="input">
            <h1>INPUT</h1>
            <input
              className="inputField"
              type="text"
              placeholder="ENTER YOUR INPUT TEXT"
              onChange={handleInputFieldUpdate}
            />
          </div>
          <div className="result">
            <h1>RESULT</h1>
            <input
              className="resultField"
              type="text"
              placeholder="OUTPUT"
              value={resultText}
              onChange={(e) => setResultText(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NMT;
