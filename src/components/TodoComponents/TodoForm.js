import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            lists: ""
        };
    }
}

 handleSubmit = e => {
     this.setState({ [e.target.task]: e.target.value});
 };

 submitItem = e => {
     e.preventDefault();
     this.props.addTodo(e, this.state.item);
 };