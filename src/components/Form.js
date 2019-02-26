import React from "react";

const Form = props =>{
    return (
    <div className = "form">
        <form onSubmit ={props.handleSubmit}>
        <input type = "file" 
        name = "image-selector"
        onChange = {props.handleChange} 
        accept = "image/png, image/jpeg"
        required />
        <button type = "submit">Submit</button>
        </form>
        </div>
    );
}


export default Form;