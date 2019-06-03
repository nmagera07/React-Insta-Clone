import React from 'react';
import './App.css';
import Post from './components/PostContainer/Post'
import dummyData from './dummy-data';
import Search from './components/SearchBar/Search'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      dummyData: dummyData,
    }
  }
  render() {
    return (
    <div className="App">
      <div>
        <Search />
        {this.state.dummyData.map(e => ( 
            <Post key={e.id} posts={e} />
        ))}
        
      </div>
    </div>
  );
  }
  
}

export default App;
