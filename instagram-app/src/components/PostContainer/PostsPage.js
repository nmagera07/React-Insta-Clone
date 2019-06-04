import React, { Component } from 'react'
import dummyData from '../../dummy-data'
import PostsContainer from './PostsContainer'
import Search from '../SearchBar/Search'

class PostsPage extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
            filteredPosts: []
        }
    }

    componentDidMount() {
        this.setState({posts: dummyData})
    }

    searchHandler = e => {
        const posts = this.state.posts.filter(post => {
            if (post.username.includes(e.target.value)) {
                return post
            }
        })
        this.setState({ filteredPosts: posts })
    }

    render() {
        return(
            <div className="App">
                <Search 
                    searchTerm={this.state.searchTerm}
                    searchPosts={this.searchHandler}
                />
                <PostsContainer 
                    posts={
                        this.state.filteredPosts.length > 0 
                        ? this.state.filteredPosts
                        : this.state.posts
                    }
                    />
            </div>
        )
    }
}