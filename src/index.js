import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
const API_KEY = 'AIzaSyCR4xZeUN2EPox-_Ra9nyrpdnfo-9JO2C8'

// Create a new component. This component should produce some HTML

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {videos: [] }

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos })
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

// After we created the component we put it on the page (DOM)

ReactDOM.render(<App />, document.querySelector('.container'))
