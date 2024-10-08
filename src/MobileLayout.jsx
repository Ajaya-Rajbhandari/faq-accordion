import React from 'react'
import Star from "./assets/images/icon-star.svg"

import "./MobileLayout.css"
import DropDown from './DropDown';

const MobileLayout = () => {
  const questions = [
    {question: 'What is Frontend Mentor, and how will it help me?', 
      answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio buildings'"},
    {question: 'Is Frontend Mentor free?', 
      answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio buildings'"},
    {question: 'Can I use Frontend Mentor projects in my portfolio?', 
      answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio buildings'"},
    {question: "How can I get help if I'm stuck on a challenge", 
      answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio buildings'"},
  ];
  return (
    <main>
      <header>
        <img src={Star} width="20" height="20" alt="Star Icon"/>
        <h1>FAQs</h1>
      </header>
      <div className="container">
            {questions.map((qa,index)=>(
              <DropDown key={index} question={qa.question} answer={qa.answer} />
            ))}
      </div>
    </main>
  )
}

export default MobileLayout