import React, { Component } from 'react';
import './thumbnails.css';
import macbook from './macbook.svg';
import star from './star.svg';
import price from './price.svg';
import icons from './icons.svg';
import iconfill from './iconfill.svg';
import machori2 from './machori2.svg';


class Thumbnails extends Component {
    constructor(props) {
        super(props);
        this.state= {
            iconstatus: 'iconshide'
        }
        this.showicons= this.showicons.bind(this)
        this.hideicons= this.hideicons.bind(this)
    }
    showicons(){
        this.setState({
            iconstatus: 'iconshow'
        });
    }
    hideicons(){
        this.setState({
            iconstatus: 'iconshide'
        })
    }
    render() {
        if(this.props.fill) {
            return(
                <div className= "thumbnail">
                    <img className= "mac" src={macbook} onMouseEnter={this.showicons} onMouseLeave={this.hideicons}/>
                    <hr/>
                    <p>Apple Macbook Pro</p>
                    <img src={star}/>
                    <img src={price}/>
                    <img className= {this.state.iconstatus} src={iconfill}/>
                </div>
            )
        }
        return(
            <div className= "thumbnail">
                <img className= "mac"  src={macbook} onMouseEnter={this.showicons} onMouseLeave={this.hideicons}/>
                <hr/>
                <p>Apple Macbook Pro</p>
                <img src={star}/>
                <img src={price}/>
                <img className={this.state.iconstatus} src={icons}/>
            </div>
        )
    }
}















export default Thumbnails;