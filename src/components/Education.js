import React from "react";

const Education = (props) => {

    function handleChange(e) {
        props.onChange(e.target.value, e.target.dataset.id, props.setState)
    }

    function handleDate(e) {
        props.changeDate(e.target.value, e.target.dataset.id, props.setState)
    }

        return (
            <div className="education-info">
                <form>
                    <label htmlFor="schoolInput">School</label>
                    <input type="text" id="schoolInput" data-id="school" 
                    placeholder="Oregon State University" value={props.education.school.text} onChange={handleChange}></input>

                    <label htmlFor="studyInput">Area of Study</label>
                    <input type="text" id="studyInput" data-id="study" 
                    placeholder="Computer Science" value={props.education.study.text} onChange={handleChange}></input>

                    <label htmlFor="dateInput">Start to End date</label>
                    <input type="date" id="dateInput" data-id="start" value={props.education.date.start} onChange={handleDate}></input>
                    <input type="date" id="dateInput" data-id="end" value={props.education.date.end} onChange={handleDate}></input>
                </form>
            </div>
        )
}

export default Education