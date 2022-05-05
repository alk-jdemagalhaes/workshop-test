import raw from "raw.macro";
import { Markdown } from "../../Markdown";

const Introduction = () => {
  return (
    <>
      <Markdown markdown={raw("./readme.md")} />
    </>
  );
};

export { Introduction };
