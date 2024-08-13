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
  const [totalCount,setTotalCount] = useState(0);
  const [winCount,setWinCount] = useState(0);

  const currentUserSelect = (current) =>{
    const itemArray= Object.keys(choice)
    let computer = itemArray[Math.floor((Math.random()*itemArray.length))];
    setUserSelect(choice[current])
    setComputerSelect(choice[computer])
    setResult(judgement(choice[current],choice[computer]));
  }

  const judgement = (user,computer) => {
    setTotalCount(totalCount+1)
    if(user.name===computer.name){
      return "TIE"
    }
    else if(user.name==="rock"){
      if(computer.name==="sissors"){
        setWinCount(winCount+1);
        return "WIN"
      }
      else {
        return "LOSE"
      }
    }
    else if(user.name==="paper"){
      if(computer.name==="rock"){
        setWinCount(winCount+1);
        return "WIN"
      }
      else {
        return "LOSE"
      }
    }
    else {
      if(computer.name==="paper"){
        setWinCount(winCount+1);
        return "WIN"
      }
      else {
        return "LOSE"
      }
    }
  }

  return (
    <div className='mainBox'>
      <div className='textSet'>
        <div className='gameTotalCount'>게임 횟수 : {totalCount} </div>
        <div className='textSlash'> / </div>
        <div className='gameWinCount'> 이긴 횟수 : {winCount}</div>
      </div>
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
