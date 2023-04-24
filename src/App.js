import React, { useState, useEffect } from "react";

const App = () => {
  const [general, setGeneral] = useState([{
    name: {text: '', edit: ''},
    email: {text: '', edit: ''},
    phone: {text: '', edit: ''}
  }])

  const [education, setEducation] = useState([{
    school: {text: '', edit: ''},
    study: {text: '', edit: ''},
    date: {start: '', end: '', edit: ''}
  }])

  const [practical, setPractical] = useState([{
    company: {text: '', edit: ''},
    position: {text: '', edit: ''},
    skills: {start: '', end: '', edit: ''}
  }])
}

export default App;
