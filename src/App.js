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
    date: {start: '', end: '', startEdit: '', endEdit: ''}
  })

  const [practical, setPractical] = useState({
    company: {text: '', edit: ''},
    position: {text: '', edit: ''},
    skills: {text: '', edit: ''}
  })

  function handleText(value, id, setState, property, state) {
    setState((existingValues) => 
    ({...existingValues, 
      [id]: {
        ...state[id],
        [property]: value
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

  function onSubmit() {
    const setStates = [setGeneral, setEducation, setPractical]
    const states = [general, education, practical]

    for (let i = 0; i <= states.length; i ++) {

      for (const prop in states[i]) {
        if (prop !== "date") {
          setStates[i]((state) => ({
            ...state,
            [prop]: {
              text: state[prop].edit,
              edit: ''
            }
          }))
        } else {
          setStates[i]((state) => ({
            ...state,
            [prop]: {
              start: state[prop].startEdit,
              end: state[prop].endEdit,
              startEdit: '',
              endEdit: ''
            }
          }))
        }
      }

    }
  }

  return (
    <div className="main">
      <div className="cv-forms">
        <General general={general} onChange={handleText} setState={setGeneral}/>
        <Education education={education} onChange={handleText} changeDate={handleDate} setState={setEducation}/>
        <Practical practical={practical} onChange={handleText} setState={setPractical} />
        <button id='submit-cv' onClick={onSubmit}>Submit</button>
        <button id='edit-cv'>Edit</button>
      </div>
      
      <div className='cv-application'>
        <CVApp general={general} education={education} practical={practical}/>
      </div>
    </div>
  )
}

export default App;
