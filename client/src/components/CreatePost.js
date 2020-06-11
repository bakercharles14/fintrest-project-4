import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class CreatePost extends Component {

    state = {
        newPost: {
            title: '',
            date: '',
            content: '',
            image: '',
            creator: 1
        },
        creators: []
    }

    componentDidMount() {
        this.getAllCreators()
    }

    getAllCreators = async () => {
        try {
            const res = await axios.get('/api/v1/creator/')
            const newState = { ...this.state }
            newState.creators = res.data
            this.setState(newState)
        } catch (error) {
            console.log(error)
        }
    }

    onInputChange = (evt) => {
        const newState = { ...this.state }
        newState.newPost[evt.target.name] = evt.target.value
        this.setState(newState)
    }

    onSubmit = async (evt) => {
        evt.preventDefault()
        console.log('HITTING THIS FUNCTION')
        try {
            await axios.post('/api/v1/post/', this.state.newPost)
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div className='create-post-page'>
                <form onSubmit={this.onSubmit} className='create-post-form'>
                    <div className='create-post-title'  >
                        <label htmlFor='title'>Title: </label>
                        <input
                            onChange={this.onInputChange}
                            name='title'
                            type='text'
                            value={this.state.newPost.title} />
                    </div>
                    <div className='create-post-date' >
                        <label htmlFor='date'>Date: </label>
                        <input
                            onChange={this.onInputChange}
                            name='date'
                            type='date'
                            value={this.state.newPost.date} />
                    </div>
                    <div className='create-post-image'>
                        <label>Image Url: </label>
                        <input
                            onChange={this.onInputChange}
                            name='image'
                            type='text'
                            value={this.state.newPost.image} />
                    </div>
                    <div className='create-post-content'>
                        <label>Content: </label>
                        <textarea
                            rows='10'
                            cols='40'
                            onChange={this.onInputChange}
                            name='content'
                            type='text'
                            value={this.state.newPost.content} />
                    </div>
                    <div>
                        <label>Creator: </label>
                        <select
                            className='select-creator'
                            name='creator'
                            value={this.state.newPost.creator}
                            onChange={this.onInputChange} >
                            {this.state.creators.map((creator, index) => {
                                return (
                                    <option key={`lkdjfslkdj-${index}`} value={creator.id}>{creator.name}</option>)
                            })}
                        </select>
                    </div>
                    <input type='submit' value='Post' />
                </form>
            </div>
        )
    }
}
