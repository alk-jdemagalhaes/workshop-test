import raw from "raw.macro";
import { Markdown } from "../../Markdown";

const GoodCoverage = () => {
  return (
    <>
      <Markdown markdown={raw("./readme.md")} />
      <iframe title="Coverage Report" src="coverage/lcov-report/index.html" />
    </>
  );
};

export { GoodCoverage };
