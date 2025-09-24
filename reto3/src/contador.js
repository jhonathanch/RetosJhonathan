import { useState } from "react";

export default function Contador() {
    cons [Counter, setCounter] = useState(defaultValue);


    const handleClick = () =>{
        setCounter(Counter + 1);
    }

    const handleReset = () =>{
        setCounter(defaultValue);
    }

    return (
        <div Style={{ textAlign: 'center' , marginTop: '30px'}}>
            <h1>Contador: {Counter}</h1>
            <button onClick={handleClick}>Incrementar</button>
            <button onClick={handleReset}> Style={{marginleft: "10px"}}reiniciar</button> 
        </div>
    )
}