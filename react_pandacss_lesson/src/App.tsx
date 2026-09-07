//import React, { lazy, Suspense } from "react";
import "./App.css";
import { css } from "../styled-system/css";

import Section from "./Section";
import MarkDown from "./MarkDown";
import * as CODE from "./code";

import Lesson1 from "./lesson/lesson1";
import Lesson1md from "./lesson/lesson1.md?raw";

import Lesson2 from "./lesson/lesson2";
import Lesson2md from "./lesson/lesson2.md?raw";

import Lesson3 from "./lesson/lesson3";
import Lesson3md from "./lesson/lesson3.md?raw";

import Doc from "./lesson/doc";
import Docmd from "./lesson/doc.md?raw";

function App() {
  const titleStyle = css.raw({
    "font-size": "2.2rem",
    "font-weight": "800",
    "font-style": "italic",
    //"text-transform": "uppercase",
    "letter-spacing": "1.0px",
    "line-height": "2.2",
    "color": "#ffffff",
    "padding-left": "10px",
    "background-color": "#0066cc",
  });
  const h1Style = css.raw({
    "font-size": "1.2rem",
    "font-weight": "500",
    //"text-transform": "uppercase",
    "letter-spacing": "1.5px",
    "line-height": "2.2",
    "color": "#000000",
    "border-left": "12px solid #0066cc",
    "border-bottom": "1px solid #0066cc",
    "padding-left": "10px",
    "margin-top": "10px",

  });

  return (
    <>


      <h1 className={css(titleStyle)}>panda-css sample</h1>

      <br/>
      <ul className={css({ listStyleType: 'disc', pl: '8' })}>
      <li><a href="https://zenn.dev/jun0723/articles/bfa4cd24096584"><p>PanndaCSSを使いこなそう</p></a></li>
      </ul>
      <br/>

      <h1 className={css(h1Style)}>CSS</h1>
      <div style={{ margin: "10px 50px 10px 10px"}}>
          <Section  width="600px" height="600px"  bg="white" code={CODE.lesson1}  flex={true} >
            <Lesson1 />
          </Section>
      </div>
      <div style={{ margin: "10px 50px 10px 10px" ,border: "solid 1px lightgray"}}>
          <MarkDown content={Lesson1md} height="300px" />
      </div>

      <h1 className={css(h1Style)}>PATTERN</h1>
      <div style={{ margin: "10px 50px 10px 10px"}}>
          <Section  width="600px" height="600px"  bg="white" code={CODE.lesson2}  flex={true} >
            <Lesson2 />
          </Section>
      </div>

      <h1 className={css(h1Style)}>RECIPE</h1>
      <div style={{ margin: "10px 50px 10px 10px"}}>
          <Section  width="600px" height="600px"  bg="white" code={CODE.lesson3}  flex={true} >
            <Lesson3 />
          </Section>
      </div>

      <hr/>
      <h1 className={css(h1Style)}>MarkDown DOC</h1>
      <div style={{ paddingLeft: "15px", paddingTop: "10px" }}>
        <MarkDown content={Docmd} />
      </div>
      {/*
      <Section width="400px" height="500px" bg="white" code={CODE.doc}>
        <Doc />
      </Section>
      */}
    </>
  );
}

export default App;
