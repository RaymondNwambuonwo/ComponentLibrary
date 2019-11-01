import React, { Component } from 'react';
import './thumbnails.css';
import macbook from './macbook.svg';
import star from './star.svg';
import price from './price.svg';


class Thumbnails extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className= "thumbnail">
                <img src={macbook}/>
                <hr/>
                <p>Apple Macbook Pro</p>
                <img src={star}/>
                <img src={price}/>
            </div>
        )
    }
}















export default Thumbnails;