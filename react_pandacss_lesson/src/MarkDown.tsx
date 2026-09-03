import React, { lazy, Suspense } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeSlug from 'rehype-slug';

//import './MarkdownContainer.css'
//import './github-markdown-css/github-markdown.css'
import "./github-markdown-css/github-markdown-light.css";
import './MarkdownContainer.css'

/*
      <ReactMarkdown 
                   remarkPlugins={[remarkGfm]}
                   rehypePlugins={[rehypeRaw, rehypeSanitize]}
      >{content}</ReactMarkdown>
*/

const customComponents = {
  h1: ({ node, ...props }) => (
    <h1 
      style={{ 
        borderBottom: '3px solid lightgray', // 下線の太さと色を指定
        paddingBottom: '8px'            // 文字と線の間の余白
      }} 
      {...props} 
    />
  ),
  hr: ({ node, ...props }) => (
    <hr style={{ border: 'none', height: '2px', backgroundColor: 'lightgray' }} {...props} />
  ),

/*
  pre: ({ node, ...props }) => (
    <pre style={{ border: 'none',  backgroundColor: '#cce5ff' }} {...props} />
  ),
*/

  pre: ({ node, className, ...props }) => {
    if (className?.includes('code')) {
       return <pre style={{ border: 'none',  
	       backgroundColor: '#123456',
	       color: 'white',
	       width: '600px'
       }} {...props} />
    }
       return <pre style={{ border: 'none',  backgroundColor: '#cce5ff' }} {...props} />
  },
  

  code: ({ node, ...props }) => (
    <code style={{ border: 'none',  backgroundColor: '#cce5ff' }} {...props} />
  ),
  ul: ({ node, ...props }) => (
    <ul style={{ "listStyleType":"disc",  "paddingLeft": "1.5rem"  }} {...props} />
  ),
  ol: ({ node, ...props }) => (
    <ol style={{ "listStyleType":"decimal",  "paddingLeft": "1.5rem"  }} {...props} />
  )
};

function MarkDown({ content }) {
  return (
    <div className="markdown-body" style={{height:"400px"}}>
      <ReactMarkdown 
                   components={customComponents}
                   remarkPlugins={[remarkGfm]}
                   rehypePlugins={[rehypeRaw, rehypeSlug]}
      >{content}</ReactMarkdown>
    </div>
  );
}

export default MarkDown;
