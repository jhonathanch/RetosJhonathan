import { useDispatch, useSelector } from "react-redux";
import { increment } from "./slices/counterSlice";
import React from "react";
import { useGetTodoByIdQuery } from "./todosApi";

export const App = () => {
    const dispatch = useDispatch();
    const { count } = useSelector((state) => state.counter);

    const handleIncrement = () => {
        dispatch(increment());
    };
    return (
        <>
            <p>Counter is: {count}</p>
            <button onClick={handleIncrement}>
                Increment
            </button>
        </>
    );
};
const App = () => {
    const { data, error, isLoading } = useGetTodoByIdQuery(1);

    if (isLoading) return <div>cargando...</div>;
    if (error) return <div>Error al cargar los datos: {error.toString()}</div>;

    return(
        <ul>
            {todosApi.map(todo => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    )
}

export const TodoDetails = ({id}) => {
    const { data, error, isLoading } = useGetTodoByIdQuery(id);

    if (isLoading) return <div>cargando...</div>;
    if (error) return <div>Error al cargar los datos: {error.toString()}</div>;

    return <h3>{todo.title}</h3>;
};
export default App;