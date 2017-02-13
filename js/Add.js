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

    this.handleInputChange = this.handleInputChange.bind(this);
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
    event.preventDefault()
    axios({
      method: 'post',
      url: 'https://mattflix-8387b.firebaseio.com/shows/.json',
      data: {
        title: 'test',
        description: 'test',
        poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc1ODA3MjAyOV5BMl5BanBnXkFtZTcwODA4MDE3OQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        imdbID: 'tt2381931',
        trailer: 'meofoNuK3vo',
        year: '2013-'
      }
    })
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
