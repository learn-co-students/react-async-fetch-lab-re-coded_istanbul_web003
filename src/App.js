import React, { Component } from 'react';

export default class App extends Component{
    constructor(){
        super()
        this.state = {
            peopleInSpace:""
        }
        this.ul = React.createRef()
    }
    

    async componentDidMount(){
        const response = await fetch("http://api.open-notify.org/astros.json")
        const data = await response.json()
        this.setState({
            peopleInSpace:data.people
        })
    }

    handleClick = event =>{
        this.state.peopleInSpace.map(eachPerson=>{
            const newLi=document.createElement("li")
            newLi.innerHTML=`<li>${eachPerson.name}</li>`
            this.ul.current.appendChild(newLi)
        })
    }

    render(){
        return(<div>
                <button onClick={this.handleClick}>Click here to see people in space!</button>
                <ul ref={this.ul}></ul>
            </div>
        )
    }

}