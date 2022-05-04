import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

type Props = {
  markdown: any;
};

const Markdown = ({ markdown }: Props) => {
  return (
    <div className="markdown">
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={dark as any}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className="inlineCode" {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
};

export { Markdown };
