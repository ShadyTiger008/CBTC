import React, { useState } from "react";
import { allKeys } from "../Keys";

function Task1() {
  const [inputData, setInputData] = useState("");

  const handleClick = (e) => {
    const clickedValue = e.target.name;
    if (clickedValue === "Clear") {
      setInputData("");
    } else if (clickedValue === "Enter") {
      calculateResult();
    } else if (clickedValue === "backSpace") {
      backSpace();
    } else {
      setInputData(inputData + clickedValue);
    }
  };

  const backSpace = () => {
    setInputData(inputData.slice(0, inputData.length - 1));
  };

  const calculateResult = () => {
    try {
      setInputData(eval(inputData).toString());
    } catch (error) {
      setInputData("Error: Invalid Expression");
      console.log("Error", error);
    }
  };

  return (
    <>
      <section className="bg-gradient-to-b from-gray-800 to-black text-white h-screen">
        <main className="h-full w-96 flex flex-col justify-center mx-auto
        ">
        <div className="py-4">
          <input
            type="text"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            className="w-full h-52 text-right font-bold text-6xl p-5 bg-gray-700 rounded-xl"
          />
        </div>
        <div
          className={`grid grid-cols-4 gap-2 ${
            inputData === "Error: Invalid Expression" ? "error" : ""
          }`}
        >
          {allKeys.map((curElem) => {
            const { id, name, icon } = curElem;
            return (
              <button
                key={id}
                name={name}
                onClick={handleClick}
                className="h-28 border text-xl shadow-xl rounded-xl bg-gradient-to-b from-gray-800 to-black text-white font-semibold hover:scale-95"
              >
                {icon}
              </button>
            );
          })}
          <button
            onClick={calculateResult}
            name="Enter"
            className="col-span-2  border text-xl shadow-xl rounded-xl bg-gradient-to-b from-gray-800 to-black text-white font-bold hover:scale-90"
          >
            ENTER
          </button>
        </div>
      </main></section>
    </>
  );
}

export default Task1;
