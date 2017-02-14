import React from 'react'
import store from './store'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import { Provider } from 'react-redux' // makes redux easier
import Landing from './Landing'
import Search from './Search'
import Details from './Details'
import axios from 'axios'
import Add from './Add'
import '../public/normalize.css'
import '../public/style.css'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      shows: []
    }
  }
  componentDidMount () {
    var _this = this
    this.serverRequest =
      axios
        .get('https://trailer-park-7809d.firebaseio.com/shows/.json')
        .then(function (result) {
          _this.setState({
            shows: result.data
          })
        })
  }
  render () {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className='app'>
            <Match exactly pattern='/' component={Landing} />
            <Match exactly pattern='/add' component={Add} />
            <Match
              pattern='/search'
              component={(props) => <Search shows={this.state.shows} {...props} />}
            />
            <Match
              pattern='/details/:id'
              component={(props) => {
                const shows = this.state.shows.filter((show) => props.params.id === show.imdbID)
                return <Details show={shows[0]} {...props} />
              }}
              />
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
}

render(<App />, document.getElementById('app'))
