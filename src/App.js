import React from 'react';


const justdoit = [
  {
    task: "Watch Netflix",
    id: 12,
    completed: false
  },
  {
    task: "Study Korean",
    id: 34,
    completed: false
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      justdoit
    }
  }

  addTodo = (event, item) => {
    event.preventDefault();

    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    }
    this.setState({justdoit: [...this.state.justdoit, newItem]});
  };

  listToggle = itemId => {
    console.log(itemId);

    this.setState({justdoit: this.state.justdoit.map(list => {
       console.log(list);
       if (itemId === list.id) {
         return {
           ...list,
           completed: !list.completed
         };
       }
    })
   })
  }

  clearCompleted = e => {
    e.preventDefault();
    this.state({
      justdoit: this.state.justdoit.filter(item => item.completed === false)
    })
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
