import React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism"
import Image from "next/image"

interface Props {
  text: string
}

function Markdown({ text }: Props) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        // 코드를 어떻게 표현할지에 대한 내용
        code({ node, inline, className, children, ...props }) {
          // markdown에 사용된 언어
          const match = /language-(\w+)/.exec(className || "")
          // 사용된 언어가 표시되어있는 경우
          return !inline && match ? (
            <SyntaxHighlighter language={match[1]} PreTag="div" {...props} style={dark}>
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            // 사용된 언어를 따로 적지 않거나 적합하지 않을 경우
            <code {...props} className={className}>
              {children}
            </code>
          )
        },
        // nextjs의 경우 img를 Image 컴포넌트로 바꿔줌
        img: image => <Image src={image.src || ""} alt={image.alt || ""} width={300} height={250} />,
      }}
    >
      {text}
    </ReactMarkdown>
  )
}

export default Markdown
