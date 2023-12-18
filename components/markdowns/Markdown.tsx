import React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism"
import Image from "next/image"

interface Props {
  text: string
}

// code => 코드조각 설정시 필요
interface CodeProps {
  inline?: boolean // inline 속성을 정의
  className?: string
  children?: React.ReactNode
}

function Markdown({ text }: Props) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        // 코드를 어떻게 표현할지에 대한 내용
        code({ inline, className, children, ...props }: CodeProps) {
          // markdown에 사용된 언어
          const match = /language-(\w+)/.exec(className || "")
          // 사용된 언어가 표시되어있는 경우
          return !inline && match ? (
            // !inline && match 조건에 맞으면 하이라이팅
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
