import { Dispatch, SetStateAction } from "react"

type cellprop = {
    go: string
    setGo: Dispatch<SetStateAction<string>>
    id: number
    cells: string[]
    setCells: Dispatch<SetStateAction<string[]>>
    cell:string
    winingmessage : string
}

export default function Cell({ go, setGo, id, cells, setCells ,cell,winingmessage}: cellprop) {



        const handcCellschange = (cellchange: string) => {
            let copyCells = [...cells]
            copyCells[id] = cellchange
            setCells(copyCells)
        }   
    

    const handclick = () => {
        const nottaken = !cells[id]
        
        if (nottaken) {
            if (go === "circle") {
                handcCellschange("circle")
                setGo("cross")
                
            } else if (go === "cross") {
                handcCellschange("cross")
                setGo("circle")
            }
        }
    }

    
    
    return <div className="squre" onClick={handclick}>
        <div className={cell}>
        {cell ? (cell === "circle" ? "O" : "X") : ""}
        </div>
        </div>
}

