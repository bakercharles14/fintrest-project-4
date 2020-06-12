import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Fins extends React.Component {

    state = {
        fins: []
    }

    componentDidMount() {
        this.getAllFins()
        this.getPostFromFins(this.state.fins)
    }

    getAllFins = async () => {
        try {
            const res = await axios.get('/api/v1/fin/')
            this.getPostFromFins(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    getPostFromFins = async (postArr) => {
        let finPost = []
        for (let i = 0; i < postArr.length; i++) {
            try {
                const res = await axios.get(`/api/v1/post/${postArr[i].post}/`)
                finPost.push(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        const newState = { ...this.state }
        newState.fins = finPost
        this.setState(newState)
    }

    render() {
        return (
            <div className='fin-page'>
                <h1>Your Fins</h1>
                <div className='fin-page-content'>
                    <div className='fin-post-item-content'>
                        {this.state.fins.map((finPost, index) => {
                            return (
                                <div key={`jjjncncncnc;dkjfl-${index}`} className='post-item'>
                                    <div className='post-title'>{finPost.title}</div>
                                    <Link to={`/post/${finPost.id}`}><img className='post-image' src={finPost.image} alt={finPost.title} /></Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
