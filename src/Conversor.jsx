import { useState } from "react"

export default function Conversor(){

    const [input, setInput] = useState ("")
    const [button, setButton] = useState("")

    function onChange (ev){
        setInput(ev.target.value)
    }

    function onClick (){
        setButton(input * 6)
        setInput("")
    }

    return(
        <>
        <h1>Conversor de Moeda</h1>
        <label>
            Digite o valor em BRL:
            <input type="number" value={input} onChange={onChange} />
            <button onClick={onClick} >Converter para euro</button>

            {button &&
            <p>Valor da conversão: {button} </p>
            }
        </label>
        </>
    )
}