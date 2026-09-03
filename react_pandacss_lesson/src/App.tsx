//import React, { lazy, Suspense } from "react";
import "./App.css";
import { css } from "../styled-system/css";

import Section from "./Section";
import MarkDown from "./MarkDown";
import * as CODE from "./code";

import Lesson1 from "./lesson/lesson1";
import Lesson1md from "./lesson/lesson1.md?raw";

import Doc from "./lesson/doc";
import DocMd from "./lesson/doc.md?raw";

function App() {
  const h1Style = css.raw({
    "font-size": "1.5rem",
    "font-weight": "900",
    "text-transform": "uppercase",
    "letter-spacing": "-1px",
    "line-height": "2.2",
    color: "#1E90FF",
    "border-left": "12px solid #1E90FF",
    "border-bottom": "1px solid #1E90FF",
    "padding-left": "10px",
  });
  /*
      <div style={{padding:"15px"}}>
   */
  return (
    <>
      <h1 className={css(h1Style)}>メインタイトル</h1>
      <div style={{ paddingLeft: "15px", paddingTop: "10px" }}>
        <MarkDown content={Lesson1md} />
      </div>
      <Section
        width="400px"
        height="300px"
        bg="white"
        code={CODE.lesson1}
        flex={true}
      >
        <Lesson1 />
      </Section>

      <h1>FOOTER</h1>
      <h1>FOOTER</h1>
      <h1>FOOTER</h1>
      <h1>FOOTER</h1>

      <h1 className={css(h1Style)}>DOC</h1>
      <div style={{ paddingLeft: "15px", paddingTop: "10px" }}>
        <MarkDown content={DocMd} />
      </div>
      <Section width="400px" height="500px" bg="white" code={CODE.doc}>
        <Doc />
      </Section>
    </>
  );
}

export default App;
