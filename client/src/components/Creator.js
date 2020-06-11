import React from 'react'
import axios from 'axios'

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
                <div className='creator-content-items'>
                    {this.state.creators.map((creator, index) => {
                        return (
                            <div key={`sdfksdkfljsdkljf;dkjfl-${index}`} className='creator-item'>
                                <h1 className='creator-name'>{creator.name}</h1>
                                <img className='creator-image' src={creator.image} alt={creator.name} height='auto' width='100' />
                                <p className='creator-description'>{creator.description}</p>
                            </div>)
                    })}
                </div>
            </div>
        )
    }
}
