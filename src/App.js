import React from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';


class App extends React.Component {

  onSearchSubmit = text => {
    axios.get('https://api.unsplash.com/search/photos', {
      params: {query: text},
      headers: {
        Authorization: 'Client-ID Erva7o5Z_A5ZkgEiy48g_opci9k3a6ZRuwPUzwpIb3M'
      }
    })
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}

export default App;