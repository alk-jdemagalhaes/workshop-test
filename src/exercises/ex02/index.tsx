import React from "react";
import { useEffect, useState } from "react";

const Ex02 = ({ onButtonClick = () => {} }) => {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div data-testid="ex02">
          <span>My Component</span>
          <button onClick={onButtonClick}>Click me</button>
          <input
            type="text"
            placeholder="My Input"
            onChange={(e) => setName(e.target.value)}
          />
          <span>My name is {name}</span>
        </div>
      )}
    </div>
  );
};

export default Ex02;
