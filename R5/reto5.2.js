import React from "react";

export const Son =({numero,increment})=>{
    console.log('vuelve a intentar..')
    return(
        <button
            className ='btn btn-primary m-3'
            onClick={()=>increment(numero)}
        >
            {numero}
        </button>
    )
}