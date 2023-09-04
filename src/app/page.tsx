'use client'

import Cell from "@/components/cell"
import { useEffect, useState } from "react"


const wining =[
  [0,1,2],
  [3,4,5],
  [7,8,9],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],

]

export default function Home() {
  
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""])
  const [go, setGo] = useState("circle")
  const [winingmessage,setWiningmessage] = useState("")

  useEffect(()=>{

    wining.forEach((comb)=>{ 
      const ow = comb.every((cell) => cells[cell] === "circle")
      const xw = comb.every((cell) => cells[cell] === "circle")

      if(ow){
        setWiningmessage("the winner is you")
      }else if(xw){
        setWiningmessage("the winner is ةث")
      }
    }
  ,[cells])})


  useEffect(()=>{
    if(cells.every((cell)=> cell!= "" &&  !winingmessage ))
{setWiningmessage("draw")}
  },[cells,winingmessage])


  return (
    <div className="continer">
      <div className="gameborder">

        {cells.map((cell, index) => (
          <Cell id={index} go={go} setGo={setGo} key={index} cells={cells} setCells={setCells} cell={cell} winingmessage={winingmessage}/>
        )
        )}

{winingmessage && winingmessage ? "" : <div>{`it's  ${go} turn`}</div>}
<br></br>
<div>{winingmessage}</div>

      </div>
    </div>
  )
}
