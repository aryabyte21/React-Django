import React, { Component } from 'react';

class Test extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/'); // fetching the data from api, before the page loaded
      const todos = await res.json();
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.todos.map(item => (
          <div key={item.id}>
            <h1>{item.first_name}</h1>
            <img src={item.image} />
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default Test;