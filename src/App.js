// create your App component here
import React, { Component } from "react";
export default class App extends Component{
    state = {
        peopleInSpace : []
    }

render(){
    return (
        <div>
            {this.state.peopleInSpace.map(person => person.name).join(", ")}
        </div>
    )
}
async componentDidMount(){
    let res = await fetch("http://api.open-notify.org/astros.json")
    let data = await res.json()
    this.setState({
        peopleInSpace : data.people
    })
}
}