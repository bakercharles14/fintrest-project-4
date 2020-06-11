import React from 'react'
import axios from 'axios'
import CreatePost from './CreatePost'

export default class Creator extends React.Component {

    state = {
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

    render() {
        return (
            <div className='creator-content'>
                <CreatePost
                    creator={this.state.creators} />
                <div className='creator-content-items'>
                    {this.state.creators.map((creator, index) => {
                        return (
                            <div key={`sdfksdkfljsdkljf;dkjfl-${index}`} className='creator-item'>
                                <div className='creator-name'>{creator.name}</div>
                                <img className='creator-image' src={creator.image} alt={creator.name} />
                                <p className='creator-description'>{creator.description}</p>
                            </div>)
                    })}
                </div>
                <h1>Creators</h1>
            </div>
        )
    }
}
