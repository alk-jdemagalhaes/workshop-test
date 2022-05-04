import raw from "raw.macro";
import { Markdown } from "../../Markdown";
import { Ex01 } from "./ex01";

const Ex01Page = () => {
  return (
    <>
      <Markdown markdown={raw("./readme.md")} />
      <div>
        <div className="instructions">
          For the first exercise, you have in the Ex01 component a bunch of div
          stacked randomly, some are showing up, and some aren't. Your goal is
          to have the test if you have the good component showing up, but also
          test if the bad ones are NOT showing up.
        </div>
        <Ex01 />
      </div>
    </>
  );
};

export { Ex01Page };
