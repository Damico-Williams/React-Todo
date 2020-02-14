import React from "react";


class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: ""
        };
    }


    handleSubmit = e => {
        this.setState({ [e.target.name]: e.target.value});
    };
   
    submitItem = event => {
        event.preventDefault();
        this.props.addTodo(event, this.state.item);
    };

    render() {
        return(
            <form onSubmit={this.submitItem}>
                <input type="text" name="item" onChange={this.handleSubmit}/>
                <button>Add Todo</button>
                <input type="button" name="clear" value="clearCompleted" onClick={this.props.clearCompleted}/>
                {/* <button onClick={props.clearCompleted}>Clear Completed</button> */}
            </form>
            
        )
    }
}

 export default TodoForm;

 