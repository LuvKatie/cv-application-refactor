import React, { useState, useEffect } from "react";
import './styles/App.css'
import './styles/Forms.css'
import './styles/CVApp.css'
import General from "./components/General";
import Education from "./components/Education";
import Practical from "./components/Practical";
import CVApp from "./components/CVApp";

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
    skills: {text: '', edit: ''}
  })

  function testObject() {
    console.log(general)
    console.log(education)
    console.log(practical)
  }

  function handleText(value, id, setState) {
    setState((existingValues) => 
    ({...existingValues, 
      [id]: {
        text: value, 
        edit: ''
      }}))
  }

  function handleDate(value, id, setState) {
    setState((existingValues) => 
    ({...existingValues,
      date: {
        ...education.date,
        [id]: value,
      }
    }))
  }

  return (
    <div className="main">
      <div className="cv-forms">
        <General general={general} onChange={handleText} setState={setGeneral}/>
        <Education education={education} onChange={handleText} changeDate={handleDate} setState={setEducation}/>
        <Practical practical={practical} onChange={handleText} setState={setPractical} />
        <button id='submit-cv'>Submit</button>
        <button id='edit-cv'>Edit</button>
      <button onClick={testObject}>Test</button>
      </div>
      
      <div className='cv-application'>
        <CVApp general={general} education={education} practical={practical}/>
      </div>
    </div>
  )
}

export default App;
