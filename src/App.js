import React, { Component } from 'react'

class App extends Component {

  state = {
    peopleInSpace: []
  }

  render() {
    return (
      <div>
        {this.state.peopleInSpace.map(person => person.name)}
      </div>
    )
  }

  async componentDidMount() {
    const data= await fetch('http://api.open-notify.org/astros.json')
      const response = await data.json()
      
        this.setState({
          peopleInSpace: response.people
        })
      
  }
}

export default App