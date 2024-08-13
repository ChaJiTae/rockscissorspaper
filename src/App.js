import './App.css';
import Box from './components/Box';
import RockImage from '../src/images/Rock.png'
import PaperImage from '../src/images/Paper.png'
import SissorsImage from '../src/images/Sissors.png'
import { useState } from 'react';

const choice = {
  rock : {
    name:"rock",
    src:RockImage,
  },
  paper : {
    name:"paper",
    src:PaperImage,
  },
  sissors : {
    name:"sissors",
    src:SissorsImage,
  }
}

function App() {

  const [userSelect,setUserSelect] = useState({});
  const [computerSelect,setComputerSelect] = useState({});
  const [result,setResult] = useState("");

  const currentUserSelect = (current) =>{
    const itemArray= Object.keys(choice)
    let computer = itemArray[Math.floor((Math.random()*itemArray.length))];
    setUserSelect(choice[current])
    setComputerSelect(choice[computer])
    setResult(judgement(choice[current],choice[computer]));
  }

  const judgement = (user,computer) => {
    if(user.name===computer.name){
      return "TIE"
    }
    else if(user.name==="rock"){
      return computer.name==="sissors" ? "WIN" : "LOSE";
    }
    else if(user.name==="paper"){
      return computer.name==="rock" ? "WIN" : "LOSE";
    }
    else {
      return computer.name==="paper" ? "WIN" : "LOSE";
    }
  }

  return (
    <div className='mainBox'>
      <div className='container'>
          <Box className="boxComponent" item={userSelect} title="You" result={result}/>
          <Box className="boxComponent" item={computerSelect} title="Computer" result={result}/>
      </div>
      <div className="buttonSet">
        <img onClick={()=>{currentUserSelect("sissors")}} className="buttonSubmitImage" src={SissorsImage}/>
        <img onClick={()=>{currentUserSelect("rock")}} className="buttonSubmitImage" src={RockImage}/>
        <img onClick={()=>{currentUserSelect("paper")}} className="buttonSubmitImage" src={PaperImage}/>
      </div>
    </div>
  );
}

export default App;
