import React from 'react';

export default  class UsernameForm extends React.Component{
constructor(props) {
  super(props)
  this.state = {
    username: '',
  }
}
render(){
  return(
    <div>
      <div>
        <h2>What is your username?</h2>
        <form onSubmit={() => this.setState(this.state.username)}>
          <input  
            type="text"
            placeholder="Your full name"
            onChange={ e => this.setState({ username: e.target.value})}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}
}
