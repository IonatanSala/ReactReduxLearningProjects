// Create a new component. This component should produce some HTML
import _ from 'lodash'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'

const YOUTUBE_API_KEY = "AIzaSyDyPgh7hadLZsYODnzTBdkG8bp18pW4hHQ";



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedVideo: null,
      videos: []
    };

    this.getYTVideos = this.getYTVideos.bind(this);
  }

  // the component has been rendered for the first time
  componentDidMount() {
    this.getYTVideos('cats')
  }

  getYTVideos(searchTerm) {
    YTSearch({key: YOUTUBE_API_KEY, term: searchTerm}, (videos) => {
      this.setState({ videos, selectedVideo: videos[0] });
    })
  }

  render() {
    const videoSearch = _.debounce((term) => { this.getYTVideos(term) }, 300)
    return (
      <div id="app">
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          />
      </div>
    )
  }

}

// Make sure it gets renderd to the DOM
ReactDOM.render(<App />, document.getElementById('app'))
