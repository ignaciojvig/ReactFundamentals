import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import styled from "styled-components";

const StyledButton = styled.button`
      background-color: green,
      color: white,
      font: inherit,
      border: 1px solid blue,
      padding: 8px,
      :hover: {
        background-color: lightgreen,
        color: black
      }`;

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Max", age: 28 },
      { id: 2, name: "Manu", age: 29 },
      { id: 3, name: "Stephanie", age: 26 }
    ],
    showPersons: false
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(x => x.id === id);

    const updatedPerson = { ...this.state.persons[personIndex] };
    updatedPerson.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = updatedPerson;

    this.setState({
      persons: persons
    });
  };

  render() {
    let persons = null;

    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((x, index) => {
            return (
              <Person
                name={x.name}
                age={x.age}
                click={() => this.deletePersonHandler(index)}
                key={x.id}
                changed={event => this.nameChangedHandler(event, x.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "lightred",
        color: "black"
      };
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red");
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1> Hi, i'm a React App</h1>
        <p className={classes.join(" ")}> This is really working </p>
        <button style={style} onClick={this.togglePersonsHandler}>
          {" "}
          Switch Name{" "}
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
