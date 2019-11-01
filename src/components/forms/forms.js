import React from 'react';
import './Forms.css';


const Forms = (props) => {
    let classList = ''
    let types = ['select', 'text']

    if (types.includes(props.type)) {
        classList += ` Forms-${props.type}`
    }
    if (props.inputType === "email"){
        return(
            <div>
                <form>
                    <input type={props.type} className={classList} placeholder="Email"/>
                </form>
            </div>
        )
    }
    
   
    
    
   
}


















export default Forms;