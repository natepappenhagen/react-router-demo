import React, { Component } from 'react';


class CreateMovie extends Component {
  constructor(){
    super();

    this.state = {
      title: '',
      description: ''
    }
  }
  updateMovie = (e) => {

    this.setState({[e.currentTarget.name]: e.currentTarget.value});

  }

  render(){
    console.log(this.props, ' this is props')
  return (
    <form onSubmit={this.props.addMovie.bind(this, this.state)}>
      <label>
        Movie:
        <input type="text" name="title" onChange={this.updateMovie}/>
      </label>
      <label>
        Description:
        <input type="text" name="description" onChange={this.updateMovie}/>
      </label>
      <input type='Submit'/>
    </form>

    )
  }
}

export default CreateMovie;