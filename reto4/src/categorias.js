import React from "react";

export const Categorias = ({ Categorias}) => {
    return (
        <ol>
            {Categorias.map((cat,idx) => (
                <li key={idx}>{cat}</li>
            ))}
        </ol>
    )
}