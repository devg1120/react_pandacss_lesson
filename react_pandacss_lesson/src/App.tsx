//import React, { lazy, Suspense } from "react";
import "./App.css";
import { css } from '../styled-system/css';


import Section from "./Section";
import MarkDown from "./MarkDown";
import * as CODE from "./code";

import Lesson1 from "./lesson/lesson1";
import Lesson1md from "./lesson/lesson1.md?raw";

function App() {
  const h1Style = css.raw({
    "font-size": "1.5rem",
    "font-weight": "900",
    "color": "#000",
    "padding-left": "15px",
  })
  return (
    <>
      <h1 className={css(h1Style)} >メインタイトル</h1>
      <div style={{padding:"15px"}}>
         <MarkDown content={Lesson1md} />
      </div>
      <Section width="400px" height="500px" bg="white" code={CODE.lesson1}>
        <Lesson1 />
      </Section>
    </>
  );
}

export default App;
