import React, { Component } from 'react'
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

            </div>
        )
    }
}
