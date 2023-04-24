import React, { useState, useEffect } from "react";
import './styles/App.css'
import './styles/Forms.css'
import './styles/CVApp.css'
import General from "./components/General";

const App = () => {
  const [general, setGeneral] = useState({
    name: {text: '', edit: ''},
    email: {text: '', edit: ''},
    phone: {text: '', edit: ''}
  })

  const [education, setEducation] = useState({
    school: {text: '', edit: ''},
    study: {text: '', edit: ''},
    date: {start: '', end: '', edit: ''}
  })

  const [practical, setPractical] = useState({
    company: {text: '', edit: ''},
    position: {text: '', edit: ''},
    skills: {start: '', end: '', edit: ''}
  })

  function testObject() {
    console.log(general)
  }

  function handleInput(value, id) {
    setGeneral((existingValues) => 
    ({...existingValues, 
      [id]: {
        text: value, 
        edit: ''
      }}))
  }

  return (
    <div className="main">
      <div className="cv-forms">
        <General general={general} onChange={handleInput}/>
        <button id='submit-cv'>Submit</button>
        <button id='edit-cv'>Edit</button>
      </div>
      <button onClick={testObject}>Test</button>
    </div>
  )
}

export default App;
