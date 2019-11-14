import React, { Component } from 'react';
import './Forms.css';
import bluecheckbox from "./bluecheckedcheckbox.svg"
import blueemptycheckbox from "./blueemptycheckbox.svg"
import blackcheckbox from "./blackcheckbox.svg"
import blackemptycheckbox from "./blackemptycheckbox.svg"

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state= {
            startingValue: props.startingValue,
            src: this.props.blackcheck?blackcheckbox:bluecheckbox
        }
        this.handleDecrease = this.handleDecrease.bind(this)
        this.handleIncrease = this.handleIncrease.bind(this)
        this.empty = this.empty.bind(this)
    }

    empty(evt){
        evt.preventDefault()
        let newSrc; 
        if(this.state.src === blackcheckbox){
            newSrc= blackemptycheckbox;
            this.setState ({
                src: newSrc
            })
        }
        else if(this.state.src === bluecheckbox){
            newSrc= blueemptycheckbox;
            this.setState ({
                src: newSrc
            })
        }
       else if(this.state.src === blackemptycheckbox){
            newSrc= blackcheckbox;
            this.setState ({
                src: newSrc
            })
        }
        else if(this.state.src === blueemptycheckbox){
            newSrc= bluecheckbox;
            this.setState ({
                src: newSrc
            })
        }
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
    if((this.props.blackcheck || this.props.bluecheck) && !this.props.textbox){
        return (
            <div>
                <img src= {this.state.src}alt="Raymond" onClick= {this.empty}/> 
            </div>
        )
    }
    if(this.props.textbox){
        return (
            <div className= "texthere">
                <img src= {this.state.src}alt="Raymond" onClick= {this.empty}/> 
                <p className= "pbox">Don't show this popup again</p>
            </div>
        )
    }

    else if(this.props.type == "text"){
        let classList = ""
        if(this.props.little){
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
    else if(this.props.type == "texttwo" && this.props.placeholder == "Voucher Code"){
        let classList = "vouch "; 
        if(this.props.large){
            classList += " large"
        }
            return(
                <form>
                    <div className = {classList + " vouch-contain"}>
                           <input className="vouch-text" type={this.props.type} placeholder= {this.props.placeholder}/>
                            <button className= "vouch-button">{this.props.buttonText} </button> 
                        </div>
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



