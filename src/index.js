import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
const API_KEY = 'AIzaSyCR4xZeUN2EPox-_Ra9nyrpdnfo-9JO2C8'

// Create a new component. This component should produce some HTML

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {videos: [] }

    YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
      console.log(data)
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

// After we created the component we put it on the page (DOM)

ReactDOM.render(<App />, document.querySelector('.container'))
