//import { useState, useEffect } from 'react';

import SyntaxHighlighter from "react-syntax-highlighter";

//https://k8shiro.github.io/ReactCompareCodeHighlighter/
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ocean } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface Props {
  code: string;
}

export default function CodeView(props: Props) {
  //style={docco}

  return (
    <SyntaxHighlighter
      language="javascript"
      //style={docco}
      //style={vs2015}
      //style={oneDark}
      //style={ocean}
      style={a11yLight}

      wrapLines={true}
      lineProps={{ style: { lineHeight: "18px" } }}

      showLineNumbers
      customStyle={{
        width: "100%",
        height: "100%",
        /*margin: "10px",*/
        border: "solid 1px gray",
        overflow: "auto",
      }}
    >
      {props.code}
    </SyntaxHighlighter>
  );
}
