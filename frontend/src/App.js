import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    loading: true,
    person: null,
}

  todoItem = ({name, complete}) => (
    <div>
      <div>
        <p>ItemName</p>  
        <p>complete</p>
      </div>
    </div>
);


async componentDidMount() {
    // const url = "https://api.randomuser.me/";
    // const response = await fetch(url);
    // const data = await respone.json();
    // console.log(data);
    // this.setState({person: data.results[0], loading: false});

    


    const url = "http://localhost:5000/todo/";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({person: data, loading: false});

}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>ToDo List</h1>
        </header>
        <div>
          {this.state.loading || !this.state.person ? 
            (
              <div>Loading...</div>)
          :
            (
              <div>
                {this.state.person.map((todoItem) => {
                  return <div>{todoItem.ItemName } : {todoItem.complete}</div>
                })}
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default App;
