import React, { Component } from 'react';
import './forms.css';

class Forms extends Component {
    constructor(props) {
        super(props);
    }
    render() {

    if(this.props.type === 'select') {
        return(
            <form>
                <select>
                <option >select</option>
                </select>
            </form>
        )
    }

    else if(this.props.type === "text"){
        return(
                <form>
                    <input type={this.props.type} placeholder="Email"/>
                </form>
        )
    }

    else if(this.props.type === "texttwo") {
        return(
            <form>
                <input type={this.props.type} placeholder="Voucher"/>
            </form>
        )
    }
}
}

export default Forms;

// const Forms = (props) => {
//     let classList = ''
//     let types = ['select', 'text']

//     if (types.includes(props.type)) {
//         classList += ` Forms-${props.type}`
//     }
//     if (props.inputType === "email"){
//         return(
//             <div>
//                 <form>
//                     <input type={props.type} className={classList} placeholder="Email"/>
//                 </form>
//             </div>
//         )
//     }
//     if (props.inputType === "select"){
//         return(
//             <div>
//                 <form>
//                     <select className={classList}>
//                     <option value={props.types}>select</option>
//                     </select>
//                 </form>
//             </div>
//         )
//     }
   
// }
