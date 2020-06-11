import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Post extends Component {

    state = {
        title: '',
        date: '',
        content: '',
        image: ''
    }

    componentDidMount() {
        this.getPost()
    }

    getPost = async () => {
        try {
            const postId = this.props.match.params.postId
            const res = await axios.get(`/api/v1/post/${postId}/`)
            let newState = { ...this.state }
            newState = res.data
            this.setState(newState)
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                <Link className='back-button-link' to='/'>
                    <button className='back-button'>
                        <span class="material-icons">
                            keyboard_backspace
                        </span>
                    </button>
                </Link>
                <div className='single-post'>
                    <img className='single-post-image' src={this.state.image} alt={this.state.title} />
                    <h2>{this.state.title}</h2>
                    <h6>{this.state.date}</h6>
                    <p className='single-post-content'>{this.state.content}</p>
                </div>

            </div>
        )
    }
}
