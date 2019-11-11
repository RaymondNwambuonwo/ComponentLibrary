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
    if(this.props.type == "select") {
        let classList = ""
        if(this.props.fill){
            classList += " select-fill"
        }
        if(this.props.reg){
            classList += " select-reg"
        }
        if(this.props.large){
            classList += " select-large"
        }
        return(
            <form>
                <select name = {this.props.name} className = {this.props.special + classList} id="">
                        <option value="">Select</option>
                    </select>
            </form>
        )
    }
    else if(this.props.type == "text"){
        let classList = ""
        if(this.props.litte){
            classList += " little-email"
        }
        if(this.props.reg){
            classList += " reg-email"
        }
        if(this.props.large){
            classList += " large-email"
        }
        return(
                <form>
                    <input type={this.props.type} placeholder={this.props.placeholder} className = {classList}/>
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
        <div className="theCount">
            
            <button onClick={this.handleDecrease} className="Butt"> - </button>
            <div className="number-input-p">{this.state.startingValue}</div>
            <button onClick={this.handleIncrease} className="Butt"> + </button>

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



