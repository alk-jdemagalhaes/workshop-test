import raw from "raw.macro";
import { Markdown } from "../../Markdown";

const JestCommands = () => {
  return (
    <>
      <Markdown markdown={raw("./readme.md")} />
    </>
  );
};

export { JestCommands };
