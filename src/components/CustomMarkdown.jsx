import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styled from 'styled-components';

export default function CustomMarkdown({ data }) {
  return (
    <Container>
      <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code(props) {
                  const { children, className, node, inline, ...rest} = props
                  const match = /language-(\w+)/.exec(className || "")
                  return inline ? (
                    // 강조 (``)
                    <code
                      style={{
                        background: "grey",
                        color: "blue",
                        padding: "2px",
                        borderRadius: "3px",
                      }}
                      {...rest}
                    >
                      {children}
                    </code>
                  ) : match ? (
                    // 코드 (```)
                    <SyntaxHighlighter
                      style={oneDark}
                      language={match[1]}
                      PreTag="div"
                      {...rest}
                    >
                      {String(children)
                        .replace(/\n$/, "")
                        .replace(/\n&nbsp;\n/g, "")
                        .replace(/\n&nbsp\n/g, "")}
                    </SyntaxHighlighter>    
                  ) : (
                    <SyntaxHighlighter
                      style={oneDark}
                      language="textile"
                      PreTag="div"
                      {...rest}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  );
                },
                // 인용문 (>)
                blockquote({ node, children, ...props }) {
                  return (
                    <div
                      style={{
                        background: "#f0f0f0",
                        padding: "1px 15px",
                        borderRadius: "10px",
                      }}
                      {...props}
                    >
                      {children}
                    </div>
                  );
                },
                img({ node, ...props }) {
                  return (
                    <img
                      style={{ maxWidth: "60vw" }}
                      src={props.src.replace("../../../../public/", "/")}
                      alt="MarkdownRenderer__Image"
                      
                    />
                  );
                },
                em({ node, children, ...props }) {
                  return (
                    <span style={{ fontStyle: "italic" }} {...props}>
                      {children}
                    </span>
                  );
                },
              }}
            >
              {data
                .replace(/\n\s\n\s/gi, "\n\n&nbsp;\n\n")
                .replace(/\*\*/gi, "@$_%!^")
                .replace(/@\$_%!\^/gi, "**")
                .replace(/<\/?u>/gi, "*")}
            </ReactMarkdown>
    </Container>
  )  
}

const Container = styled.div`
  
  background-color: #22272E;
  color: white;
  /* letter-spacing: 0.1rem; */
  /* word-spacing: 1px; */
  line-height: 2.1;
	padding: 0.8em;
  
	

  & > hr {
    border: 1px solid var(--color-blog-dark-gray);
  };
  & > table {
    border-spacing: 0 !important;
    border-collapse: collapse !important;
    border-color: inherit !important;
    display: block !important;
    width: max-content !important;
    max-width: 100% !important;
    overflow: auto !important;
  };
  & > tbody, td, tfoot, th, thead, tr {
  /* border-color: inherit !important; */
  border-color: #444C56;
  border-style: solid !important;
  border-width: 1.5px !important;
  padding-inline: 0.6rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  };
`;