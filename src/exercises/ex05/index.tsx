import raw from "raw.macro";
import { Markdown } from "../../Markdown";

import { Ex05Framework } from "./ex05";

const Ex05Page = () => {
  return (
    <>
      <Markdown markdown={raw("./readme.md")} />
      <div>
        <div className="instructions">
          We're firing sagas now ! Check that the saga is firing all the
          elements properly, but for the RANDOMIZER ? You can't test the exact
          variable, so use put.like instead !
        </div>
        <Ex05Framework />
      </div>
    </>
  );
};

export { Ex05Page };
