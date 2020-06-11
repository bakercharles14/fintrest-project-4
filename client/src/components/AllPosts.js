import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class AllPosts extends React.Component {

    state = {
        posts: []
    }

    componentDidMount() {
        this.getAllPosts()
    }

    getAllPosts = async () => {
        try {
            const res = await axios.get('/api/v1/allposts/')
            const newState = { ...this.state }
            newState.posts = res.data
            this.setState(newState)
        } catch (error) {
            console.log(error)
        }

    }

    render() {
        return (
            <div>
                <h1>All Posts</h1>
                {this.state.posts.map((post) => {
                    return (
                        <Link to={`/post/${post.id}`}>
                            <div>
                                <div>{post.title}</div>
                                <div>{post.date}</div>
                                <div>{post.content}</div>
                                <img alt={post.title} src={post.image} />
                                <div>{post.creator}</div>
                            </div>
                        </Link>)
                })}
            </div>
        )
    }
}
