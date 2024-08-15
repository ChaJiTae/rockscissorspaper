import React, { Component } from 'react'
import "../styles/Box.css"

export default class BoxClass extends Component {

    constructor(){
        super();
        this.result = "";
    }

    getNewResult = () => {
        if(this.props.title === "Computer" && this.props.result !== "TIE" && this.props.result !== ""){
            this.result = this.props.result === "WIN" ? "LOSE" : "WIN";
        }
        else {
            this.result = this.props.result;
        }
    }

render() {
    this.getNewResult();
    return (
        <div className={`ContainerBox ${this.result}`}>
            <h1 className='title'>{this.props.title}</h1>
            <div><img className="insertImage" src={this.props.item && this.props.item.src} /></div>
            <p className='result'>{this.result}</p>
        </div>
    )
}
}
