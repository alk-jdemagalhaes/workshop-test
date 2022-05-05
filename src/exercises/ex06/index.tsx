import raw from "raw.macro";
import { Markdown } from "../../Markdown";
import { Ex06 } from "./ex06";

const Ex06Page = () => {
  return (
    <>
      <Markdown markdown={raw("./readme.md")} />
      <div>
        <div className="instructions">
          You can do dice rolls ! But let's try to game the system in our test.
          Make sure to test that our dice roll announcement is tested, but since
          it is random, you'll have to mock the function ! But don't mock my
          dice roll tho, that'd be unfair !
        </div>
        <Ex06 />
      </div>
    </>
  );
};

export { Ex06Page };
