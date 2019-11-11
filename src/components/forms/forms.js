import React, { Component } from 'react';
import './Forms.css';
// import { stat } from 'fs';

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state= {
            startingValue: props.startingValue
        }
        this.handleDecrease = this.handleDecrease.bind(this)
        this.handleIncrease = this.handleIncrease.bind(this)
    }
    handleDecrease(evt){
        evt.preventDefault()
        let newClick;
        if (this.state.startingValue !== this.props.min){
            newClick = this.state.startingValue - this.props.step;
            this.setState({
                startingValue: newClick
            });
        }
    }
    handleIncrease(evt) {
        evt.preventDefault();
        let newClick;
        if (this.state.startingValue !== this.props.max) {
          newClick = this.state.startingValue + this.props.step;
          this.setState({
            startingValue: newClick
          });
        }
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
    return(
        <div className="number-input-div">
            
            <div onClick={this.handleDecrease}><button> - </button></div>
            <p className="number-input-p">{this.state.startingValue}</p>
            <div onClick={this.handleIncrease}><button> + </button></div>

        </div>
    )
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



const buttonStyle = {
    backgroundColor: "#F6F7F8",
    color: "#33A0FF",
    height: "46px",
    width: "5px",
    textAlign: "center",
    padding: "0"
  };