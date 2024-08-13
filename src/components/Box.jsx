import React from 'react'
import "../styles/Box.css"

export default function Box({item,title,result}) {

  let newResult = "";
  if(title==="Computer"&&result!=="TIE"&&result!=="") newResult = result === "WIN" ? "LOSE" : "WIN";
  else newResult = result;

  return (
    <div className={`ContainerBox ${newResult}`}>
        <h1 className='title'>{title}</h1>
        <div><img className="insertImage" src={item && item.src}/></div>
        <p className='result'>{newResult}</p>
    </div>
  )
}