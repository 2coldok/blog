import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styled from 'styled-components';
import { useThemeChange } from "../../hook/ThemeHook";

export default function CustomMarkdown({ data }) {
  const { themeName } = useThemeChange();
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
                    <InlineCode {...rest}>
                      {children}
                    </InlineCode>
                  ) : match ? (
                    // 코드 (```)
                    <StyledSyntaxHighlighter
                      style={themeName === 'colorweakness' ? a11yDark : oneDark}
                      language={match[1]}
                      PreTag="div"
                      {...rest}
                      
                    >
                      {String(children)
                        .replace(/\n$/, "")
                        .replace(/\n&nbsp;\n/g, "")
                        .replace(/\n&nbsp\n/g, "")}
                    </StyledSyntaxHighlighter>    
                  ) : (
                    <SyntaxHighlighter2
                      style={oneDark}
                      language="textile"
                      PreTag="div"
            
                      {...rest}
                    
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter2>
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
  //깃발
  background-color: ${({theme}) => theme.colors.block};
  //
  font-size: 1.1em;
  font-weight: 400;
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
  color: ${({theme}) => theme.colors.articletext};
  
  /* letter-spacing: 0.1rem; */
  /* word-spacing: 1px; */
  line-height: 2.1;
	padding: 1em 1.5em;

  // 모바일 폰트사이즈, 패딩
  @media (max-width: 900px) {
    font-size: 1em;
    padding: 0.2em;
  }
  /* border: 1px solid ${({theme}) => theme.colors.border}; */
  border-top: none;
  
  word-wrap: break-word;
  overflow-wrap: break-word;

  & > ul {
    list-style: disc outside none;
    padding: 0 0 0 40px;
  }
  
  & > hr {
    border: 1px solid ${({theme}) => theme.colors.border};

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
  //** 테이블 경계선 스타일링 */
  
  border-color: ${({theme}) => theme.colors.articletable};
  border-style: solid !important;
  border-width: 1px !important;
  padding-inline: 0.6rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  };
`;

// 이 스타일은 SyntaxHighlighter2에 의해 오버라이드 됨.. 원인모름
const InlineCode = styled.code`
  background: #584a4a;
  color: blue;
  padding: 2px;
  border-radius: 3px;
  display: inline !important;
`

// 코드 ```블록 폰트 사이즈
const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  font-size: 0.9em;

  @media (max-width: 900px) {
    padding-left: 0.3em !important;
  }
  
`


// 백틱으로 감싼 inline code block 스타일링
// 대신 코드블럭시 이름을 명확히 명시해야 함.
// 단순히 블럭을 생성하고 싶을 시 ```zsh ```로 감싸자
const SyntaxHighlighter2 = styled.span`
  //* 백틱 블록 스타일*
  /* background-color: #354153; */
  background-color: ${({theme}) => theme.colors.articlebacktick};
  font-weight: 600;
  padding: 0.1em 0.3em;
  border-radius: 0.5em;
  
`
/**
 * 1. table: #465464 , bg: #3C434D
 * 2. table: #AEBACB , bg: #451c27
 * 3. table: #95aea3,  bg: #785c45
 */