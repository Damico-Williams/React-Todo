import React from "react";
import "./Todo.css";

const Todo = props => {

    return(
        <div
        className={`${props.list.completed ? "underline" : ""}`}
        onClick={() => props.listToggle(props.list.id)}>
            <p>{props.list.task}</p>
        </div>
    )
};

export default Todo;