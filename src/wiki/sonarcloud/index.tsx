import raw from "raw.macro";
import { Markdown } from "../../Markdown";

const Sonarcloud = () => {
  return (
    <>
      <Markdown markdown={raw("./readme.md")} />
      <iframe
        title="Coverage Report"
        src="https://sonarcloud.io/project/overview?id=alkemics_front-productstream"
      />
    </>
  );
};

export { Sonarcloud };
