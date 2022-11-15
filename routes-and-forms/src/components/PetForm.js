import React, { useState } from "react";
import "../style.css";

const PetForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [colour, setColour] = useState("");
  const [hasSumitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="register--wrapper">
      <div className="register--border">
        <h3>Register Your Pet</h3>
        <h4>Please fill in your pet's details below</h4>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form--wrapper">
            <label>
              Pet's Name:
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setSubmitted(false);
                }}
              />
            </label>
            <label>
              Pet's Age:
              <input
                type="number"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                  setSubmitted(false);
                }}
              />
            </label>
            <label>
              Pet's Colour:
              <input
                type="text"
                value={colour}
                onChange={(e) => {
                  setColour(e.target.value);
                  setSubmitted(false);
                }}
              />
            </label>
          </div>
          <input type="submit" value="Submit" id="submit-button" />
        </form>
        <div className="results--wrapper" id="results">
          {hasSumitted && (name || age || colour !== "") ? (
            <h3>Thank you for submitting</h3>
          ) : (
            <p>Please fill out the form to see results</p>
          )}
          {name === "" ? null : (
            <>
              Name: {name}
              <br />
            </>
          )}
          {age === "" ? null : (
            <>
              Age: {age}
              <br />
            </>
          )}
          {colour === "" ? null : (
            <>
              Colour: {colour}
              <br />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PetForm;
