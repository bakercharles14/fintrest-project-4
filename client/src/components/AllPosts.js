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
            const res = await axios.get('/api/v1/post/')
            const newState = { ...this.state }
            newState.posts = res.data
            this.setState(newState)
        } catch (error) {
            console.log(error)
        }

    }

    render() {
        return (
            <div className='allposts-content'>
                {this.state.posts.map((post) => {
                    return (
                        <Link to={`/post/${post.id}`}>
                            <div className='post-item'>
                                <div>{post.title}</div>
                                <img className='post-image' alt={post.title} src={post.image} />
                            </div>
                        </Link>)
                })}
            </div>
        )
    }
}
