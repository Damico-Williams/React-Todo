// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo.js";

const TodoList = props => {
    console.log(props)
    return(
        <div>
            {props.justdoit.map(list => (
                <Todo key={list.id} list={list} listToggle={props.listToggle}/>
            ))}
            {/* <button onClick={props.clearCompleted}>Clear Completed</button> */}
        </div>
    )
}

export default TodoList;