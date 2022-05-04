import raw from "raw.macro";
import { Markdown } from "../../Markdown";

const OldCodeHandling = () => {
  return (
    <>
      <Markdown markdown={raw("./readme.md")} />
    </>
  );
};

export { OldCodeHandling };
