//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
import React, { lazy, Suspense } from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import "./App.css";

import Section from "./Section";
import * as CODE from "./code";

import Lesson1 from "./lesson/lesson1";
import myMarkdown from './lesson/lesson1.md?raw';

function App() {
  return (
    <>
      <h3>Lesson1</h3>
      <Section width="400px" height="500px" bg="lightgreen" code={CODE.lesson1}>
        <Lesson1 />
      </Section>
    <div>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{myMarkdown}</ReactMarkdown>
    </div>
    </>
  );
}

export default App;
