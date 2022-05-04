import raw from "raw.macro";
import { Markdown } from "../../Markdown";
import { Ex04Framework } from "./ex04";

const Ex04Page = () => {
  return (
    <>
      <Markdown markdown={raw("./readme.md")} />
      <div>
        <div className="instructions">
          Here, we need to test exclusively our reducer, not the component. Try
          to test the setcounter and the increaseCounter actions !
        </div>
        <Ex04Framework />
      </div>
    </>
  );
};

export { Ex04Page };
