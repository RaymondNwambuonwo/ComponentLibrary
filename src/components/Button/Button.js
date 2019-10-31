import React from 'react';
import './Button.css';

// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
    let classList = ''
    let types = ['primary', 'danger', 'success', 'warning','default','success','primary-blend', 'danger-blend', 'success-blend', 'warning-blend', 'default-blend']
    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    }
    if (props.large) {
        classList += ` button-large`
    }
    if (props.outline) {
        classList += ` button-outline`
        classList += ` button-outline-${props.type}`
    }

    
   return <button className={classList}>
        {props.label}
    </button>
}


export default Button;