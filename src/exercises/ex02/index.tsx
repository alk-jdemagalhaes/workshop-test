import raw from "raw.macro";
import { Markdown } from "../../Markdown";
import { Ex02 } from "./ex02";

const Ex02Page = () => {
  return (
    <>
      <Markdown markdown={raw("./readme.md")} />
      <div>
        <div className="instructions">
          For this exercise, you need to make sure to wait for the components to
          load, then test that input are working correctly, then test if the
          sending button sends your right functions and that the end result do
          show up.
        </div>
        <Ex02 />
      </div>
    </>
  );
};

export { Ex02Page };
