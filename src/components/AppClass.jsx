import React, { Component } from 'react'
import '../App.css';
import BoxClass from './BoxClass';
import RockImage from '../images/Rock.png'
import PaperImage from '../images/Paper.png'
import SissorsImage from '../images/Sissors.png'

const choice = {
    rock: {
        name: "rock",
        src: RockImage,
    },
    paper: {
        name: "paper",
        src: PaperImage,
    },
    sissors: {
        name: "sissors",
        src: SissorsImage,
    }
}

export default class AppClass extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userSelect: {},
            computerSelect: {},
            result: "",
            totalCount: 0,
            winCount: 0,
        }
    }

    currentUserSelect = (current) => {
        const itemArray = Object.keys(choice)
        let computer = itemArray[Math.floor((Math.random() * itemArray.length))];
        this.setState({
            userSelect: choice[current],
            computerSelect: choice[computer],
            result: this.judgement(choice[current], choice[computer]),
        })
        
    }

    judgement = (user, computer) => {
        this.setState({ totalCount: this.state.totalCount + 1 });
        if (user.name === computer.name) {
            return "TIE"
        }
        else if (user.name === "rock") {
            if (computer.name === "sissors") {
                this.setState({ winCount: this.state.winCount + 1 });
                return "WIN"
            }
            else {
                return "LOSE"
            }
        }
        else if (user.name === "paper") {
            if (computer.name === "rock") {
                this.setState({ winCount: this.state.winCount + 1 });
                return "WIN"
            }
            else {
                return "LOSE"
            }
        }
        else {
            if (computer.name === "paper") {
                this.setState({ winCount: this.state.winCount + 1 });
                return "WIN"
            }
            else {
                return "LOSE"
            }
        }
    }

    render() {

        return (
            <div className='mainBox'>
                <div className='textSet'>
                    <div className='gameTotalCount'>게임 횟수 : {this.state.totalCount} </div>
                    <div className='textSlash'> / </div>
                    <div className='gameWinCount'> 이긴 횟수 : {this.state.winCount}</div>
                </div>
                <div className='container'>
                    <BoxClass className="boxComponent" item={this.state.userSelect} title="You" result={this.state.result} />
                    <BoxClass className="boxComponent" item={this.state.computerSelect} title="Computer" result={this.state.result} />
                </div>
                <div className="buttonSet">
                    <img onClick={() =>this.currentUserSelect("sissors") } className="buttonSubmitImage" src={SissorsImage} />
                    <img onClick={() =>this.currentUserSelect("rock") } className="buttonSubmitImage" src={RockImage} />
                    <img onClick={() =>this.currentUserSelect("paper") } className="buttonSubmitImage" src={PaperImage} />
                </div>
            </div>
        )
    }
}
