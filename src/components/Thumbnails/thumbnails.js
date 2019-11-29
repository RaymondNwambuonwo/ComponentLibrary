import React, { Component } from './node_modules/react';
import './Thumbnails.css';
import macbook from './macbook.svg';
import star from './star.svg';
import price from './price.svg';
import icons from './icons.svg';
import iconfill from './iconfill.svg';
import beats from './beats.svg';
import subreview from './subreview.svg';
import noreviews from './noreviews.svg';
import cart from '../Button/cart2.png';
import heart from '../Button/heart.png';
import Button from '../Button/Button';


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
        if(this.props.horizontal){
            return(
                <div className= "thumbnail2">
                <img src={macbook}/>
                <div className= "container">
                <p className="apple">Apple Macbook Pro</p>
                <img className= "starr" src={star}/>
                <img className= "pricee" src={price}/>
                </div>
            </div>
            )
        }
        if(this.props.inline){
            return(
                <div className= "thumbnail3">
                    <div className= "thumbtain">
                        <div className="hot">
                    <Button label="Hot" type="danger" />
                    </div>
                <img className= "macer" src={macbook}/>
                </div>
                <div className= "container3">
                <h4 className="apple2">Beats Solo2 On Ear Headphones - Black</h4>
                <div className="picss">
                <img className= "starr2" src={star}/>
                <div className="empt"></div>
                <img className= "norev" src={noreviews}/>
                <div className="empt"></div>
                <img className= "subrev" src={subreview}/>
                </div>
                <hr/>
                <img className= "pricee" src={price}/>
                <p className="par">Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...</p>
                <div className= "but">
                <Button label="Add to Cart" type="primary-blend" icon={cart}/>
                <div className="empt"></div>
                <Button type="primary-blend"icon={heart}/>
                </div>
                </div>
            </div>
            )
        }
        if(this.props.beatss){
            return(
                <div className= "thumbnail3">
                <img src={beats}/>
                <div className= "container2">
                <p className="apple">Beats Solo 2 On Ear Headphones - Black</p>
                <img className= "starr2" src={star}/>
                <img className= "pricee" src={price}/>
                </div>
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