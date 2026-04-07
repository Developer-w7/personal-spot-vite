import React, { useState, useEffect, useId } from "react";

import "./style.css";
import ButtonPrimary from "@/components/common/atom/button-primary";
import Popover from "@/components/common/elements/pop-over";

export default function TODO() {
  useEffect(() => {}, []);
  const unique: string = useId();

  const [Dates, setDate] = useState([]);

  useEffect(() => {}, []);

  useEffect(() => {
    setDate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  }, []);

  const entries: { [key: number]: string[] } = {
    1: ["A", "B", "C"],
    2: ["B", "C", "D"],
    3: ["C", "D", "E"],
    4: ["D", "E", "F"],
    5: ["E", "F", "G"],
    6: ["F", "G", "H"],
    7: ["G", "H", "I"],
    8: ["H", "I", "J"],
    9: ["I", "J", "K"],
    10: ["J", "K", "L"],
    11: ["K", "L", "M"],
    12: ["L", "M", "N"],
  };
  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {};

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {};
  const resetHandler = (event: React.FormEvent<HTMLFormElement>) => {};
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const getEntries = (date: number) => {
    if (!entries[date]) {
      return [];
    }
    return entries[date];
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#007BFF",
    color: "#FFFFFF",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const buttonWrapperStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  };

  const popOverStyle: React.CSSProperties = {
    margin: "20px",
    padding: "10px",
    background: "#fff",
    border: "1px solid #ccc",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  };

  return (
    <div className="todo-wrapper">
      <p>To Do Manager</p>
      <div className="todo-main-wrapper">
        {Dates.map((item, index) => (
          <>
            <div key={`${unique}-${index}`} className="todo-item">
              <div>
                <input
                  className="to-do-check"
                  type="checkbox"
                  id={`todo-${item}`}
                  name={`todo-${item}`}
                />
                <label className="to-do-label" htmlFor={`todo-${item}`}>
                  Day {item}
                </label>
              </div>
              <div className="to-do-entries">
                {getEntries(item).map((entry: string, entryIndex: number) => (
                  <div
                    key={`${unique}-entry-${entryIndex}`}
                    className="to-do-entry"
                    draggable="true"
                  >
                    {entry}
                    {index + 1}
                  </div>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>

      <Popover isOpen={isPopoverOpen}>
        <div style={popOverStyle}>
          Hello from the Popover!
          <div className="button-wrapper" style={buttonWrapperStyle}>
            <ButtonPrimary
              style={buttonStyle}
              label="close"
              onClick={() => setIsPopoverOpen(false)}
            ></ButtonPrimary>
          </div>
        </div>
      </Popover>

      <div
        className="button-wrapper"
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <ButtonPrimary
          style={buttonStyle}
          onClick={() => setIsPopoverOpen(!isPopoverOpen)}
          label="Add Entry"
        />
      </div>
    </div>
  );
}
