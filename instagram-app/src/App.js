import React from 'react';
import './App.css';
import './components/SearchBar/search.css'
import './components/PostContainer/postContainer.css'
import './components/CommentSection/comments.css'
import Post from './components/PostContainer/Post'
import dummyData from './dummy-data';
import Search from './components/SearchBar/Search'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      dummyData: []
    }
  }

  componentDidMount() {
    this.state = {
      dummyData
    }
  }

  addComment = commentName => {
    
    const newComment = {
      dummyData: commentName,
      id: Date.now(),
    };
    this.setState(prevState => {
      return {
        dummyData: [...prevState.dummyData, newComment]
      };
    });
  };

  render() {
    return (
    <div className="App">
      <div>
        <Search />
        {dummyData.map(e => ( 
            <Post addComment={this.addComment} key={e.id} posts={e} />
        ))}
        
      </div>
    </div>
  );
  }
  
}

export default App;
