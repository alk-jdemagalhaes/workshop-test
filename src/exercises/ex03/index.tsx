import raw from "raw.macro";
import { Markdown } from "../../Markdown";
import { Ex03Framework } from "./ex03";

const Ex03Page = () => {
  return (
    <>
      <Markdown markdown={raw("./readme.md")} />
      <div>
        <div className="instructions">
          Now that we're connected to our super secret website, we can see the
          Shrek movie in all his 40Mb glory, but we might now want to test that
          ! First, make sure we have a defined state, with an user and likes.
          then, test if our dispatch works and increases the likes. Check if
          we're currently at the right route : ex03. But watch out, and don't
          actually render the movie ! Make sure your component is mocked.
        </div>
        <Ex03Framework />
      </div>
    </>
  );
};

export { Ex03Page };
