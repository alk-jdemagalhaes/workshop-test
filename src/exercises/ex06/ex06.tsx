import { useState } from "react";
import { getDiceRoll, rollTheDice } from "./dice";

const Ex06 = () => {
  const [diceRoll, setDiceRoll] = useState<number>();

  return (
    <>
      <div>Hello ! Feeling lucky ? I rolled a {getDiceRoll()} lately.</div>
      <button onClick={() => setDiceRoll(rollTheDice())}>
        Roll the dice !
      </button>
      {!!diceRoll && <div>You rolled a {diceRoll} !</div>}
    </>
  );
};

export { Ex06 };
