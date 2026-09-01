import React, { lazy, Suspense } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

//import './MarkdownContainer.css'
//import './github-markdown-css/github-markdown.css'
import "./github-markdown-css/github-markdown-light.css";

function MarkDown({ content }) {
  return (
    <div className="markdown-body">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}

export default MarkDown;
