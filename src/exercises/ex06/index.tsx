import raw from "raw.macro";
import { Markdown } from "../../Markdown";

const Ex06Page = () => {
  return (
    <>
      <Markdown markdown={raw("./readme.md")} />
      <div>
        <div className="instructions">
          Let's test a whole bunch of generic mocks from Jest, and clear them
        </div>
      </div>
    </>
  );
};

export { Ex06Page };
