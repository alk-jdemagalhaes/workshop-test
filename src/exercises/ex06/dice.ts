const getDiceRoll = () => 4; // chosen by fair dice roll. Guaranteed to be random.

const rollTheDice = () => Math.round(Math.random() * 6);

export { getDiceRoll, rollTheDice };
