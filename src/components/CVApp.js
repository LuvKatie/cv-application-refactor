import React from "react";

const CVApp = (props) => {

    function getProps(category, section) {
        if (section === 'start' || section === 'end') {
            return props[category].date[section]
        }
        return props[category][section].text
    }

    return (
        <div className="cv-container">
            <form id="cv-general">
                <input type="text" id="cv-name" value={getProps('general', 'name')} disabled></input>
                <input type="email" id="cv-email" value={getProps('general', 'email')} disabled></input>
                <input type="tel" id="cv-phone" value={getProps('general', 'phone')} disabled></input>
            </form>
            <hr></hr>
            <form id="cv-education">
                <input type="text" id="cv-school" value={getProps('education', 'school')} disabled></input>
                <input type="text" id="cv-study" value={getProps('education', 'study')} disabled></input>
                <input type="text" id="cv-start-date" value={getProps('education', 'start')} disabled></input>
                <input type="text" id="cv-end-date" value={getProps('education', 'end')} disabled></input>
            </form>
            <hr></hr>
            <form id="cv-practical">
                <input type="text" id="cv-company" value={getProps('practical', 'company')} disabled></input>
                <input type="text" id="cv-position" value={getProps('practical', 'position')} disabled></input>
            </form>
            <hr></hr>
            <form id="cv-skills">
                <textarea id="cv-experience" rows={9} maxLength={320} value={getProps('practical', 'skills')} disabled></textarea>
            </form>
        </div>
    )
}

export default CVApp