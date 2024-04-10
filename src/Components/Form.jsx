import React, { useRef, useState } from "react";

const Form = () => {
  const form = {
    marginLeft: "665px",
  };
  const input = {
    padding: "20px",
    width: "320px",
    borderRadius: "12px",
  };
  const btn = {
    padding: "20px",
    width: "350px",
    borderRadius: "12px",
    backgroundColor: "#74c374",
    color: "black",
    fontSize: "25px",
  };
  const label = {
    fontSize: "35px",
  };
  const [val, setVal] = useState("");
  const name = useRef(null);
  let submit = (e) => {
    e.preventDefault();


    name.current.value === "" ? alert("please enter your name ") : setVal(name.current.value);
  };
  return (
    <>
      <form onSubmit={submit} style={form}>
        <label style={label}>Enter Your Name</label> <br />
        <br />
        <input ref={name} style={input} type="text" />
        <br />
        <br />
        <button style={btn}>Submit</button>
        <h2>{val ? `Namaste 🙏🏽:  ${val}` : ""}</h2>
      </form>
    </>
  );
};

export default Form;
