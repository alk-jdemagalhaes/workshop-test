import React from "react";

const Ex01 = () => {
  return (
    <div>
      <span>Hello World !</span>
      {false && <span>This is not showing up !</span>}
      <button>My bouton</button>
      {false && <a>My link</a>}
      <div data-testid="test1">Test1</div>
      {false && <div data-testid="test2">Test2</div>}
    </div>
  );
};

export default Ex01;
