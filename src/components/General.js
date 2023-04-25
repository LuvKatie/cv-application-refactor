import React, { useState, useEffect } from "react";

const General = (props) => {

    function handleChange(e) {
        props.onChange(e.target.value, e.target.dataset.id, props.setState, 'edit', props.general)
    }

    return (
        <div className='general-info'>
            <form>
                <label htmlFor="nameInput">Name</label>
                <input type="text" id="nameInput" data-id="name" 
                placeholder="John Doe" value={props.general.name.edit} onChange={handleChange}></input>

                <label htmlFor="emailInput">Email</label>
                <input type="email" id="emailInput" data-id="email" 
                placeholder="johndoe@gmail.com" value={props.general.email.edit} onChange={handleChange}></input>

                <label htmlFor="phoneInput">Phone #</label>
                <input type="tel" id="phoneInput" data-id="phone" 
                placeholder="000-000-0000" value={props.general.phone.edit} onChange={handleChange}></input>
            </form>
        </div>
        
    )
}

export default General;