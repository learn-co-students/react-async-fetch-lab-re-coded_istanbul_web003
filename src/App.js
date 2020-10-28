import React, { Component } from 'react'

export default class App extends Component {
    state = {
        pplInSpace:[]
    }
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            this.setState({
                pplInSpace: data.people
            })
        })
    }
    render() {
        return (
            <div>
               {this.state.pplInSpace.map(ppl => ppl.name)}
            </div>
        )
    }
}
