import React, { Component } from 'react'
import UsernameForm from './components/UsernameForm';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentUsername = '',
    }
this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)
}

onUsernameSubmitted(username){
  fetch('http://localhost:3000/users', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username }),
  })
  .then( responce => {
    this.setState({ 
    currentUsername: username
    })
  })
  .catch(error => console.error(error, 'error'))
}

render() {
  return <h1>Chatly</h1>
}
}



export default App