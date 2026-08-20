//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
import './App.css'

import Section from './Section'
import  *  as CODE from './code'

import Lesson1 from './lesson/lesson1'

function App() {

  return (
    <>
      <h3>Lesson1</h3>
      <Section width="400px" height="500px" bg="lightgreen" code={CODE.lesson1}>
           <Lesson1/>
      </Section>
    </>
  )
}

export default App
