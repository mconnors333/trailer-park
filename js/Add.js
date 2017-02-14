import React from 'react'
import Header from './Header'
import axios from 'axios'

class Add extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      poster: '',
      imdbID: '',
      trailer: '',
      year: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange (event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    alert('A name was submitted: ' + this.state.title)

    axios.post('https://trailer-park-7809d.firebaseio.com/shows/.json', {
      title: this.state.title,
      description: this.state.description,
      poster: this.state.poster,
      imdbID: this.state.imdbID,
      trailer: this.state.trailer,
      year: this.state.year
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    event.preventDefault()
    // axios({
    //   method: 'post',
    //   url: 'https://trailer-park-7809d.firebaseio.com/shows/.json',
    //   data: {
    //     title: this.state.title,
    //     description: this.state.description,
    //     poster: this.state.poster,
    //     imdbID: this.state.imdbID,
    //     trailer: this.state.trailer,
    //     year: this.state.year
    //   }
    // })
  }

  render () {
    return (
      <div>
        <Header />
        <form className='landing' onSubmit={this.handleSubmit}>
          <label>
            Title:<br />
            <input
              name='title'
              type='text'
              value={this.state.title}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Description:<br />
            <input
              name='description'
              type='text'
              value={this.state.description}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Year:<br />
            <input
              name='year'
              type='text'
              value={this.state.year}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            IMDB ID:<br />
            <input
              name='imdbID'
              type='text'
              value={this.state.imdbID}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Image URL:<br />
            <input
              name='poster'
              type='text'
              value={this.state.poster}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            YouTube Link:<br />
            <input
              name='trailer'
              type='text'
              value={this.state.trailer}
              onChange={this.handleInputChange} />
          </label>
          <br /><br />
          <button type='submit'>Add New Entry</button>
        </form>
      </div>
    )
  }
}

export default Add
