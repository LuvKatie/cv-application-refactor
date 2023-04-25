import React from "react";

const Practical = (props) => {

    function handleChange(e) {
        props.onChange(e.target.value, e.target.dataset.id, props.setState);
    }

    return (
        <div className="practical-info">
            <form>
                <label htmlFor="companyInput">Company</label>
                <input type="text" id="companyInput" data-id="company" 
                placeholder="Google | Amazon | Microsoft" value={props.practical.company.text}
                onChange={handleChange}></input>
                
                <label htmlFor="positionInput">Poisition Title</label>
                <input type="text" id="positionInput" data-id="position" 
                placeholder="Senior Software Engineer" value={props.practical.position.text}
                onChange={handleChange}></input>

                <label htmlFor="positionInput">Main Tasks / Skills</label>
                <textarea id="positionInput" data-id="skills" 
                rows={4} cols={40} maxLength={320} 
                placeholder={`320 characters max \nEx. HTML, CSS, Javascript, React`} value={props.practical.skills.text}
                onChange={handleChange}/>
            </form>
        </div>
    )
}

export default Practical