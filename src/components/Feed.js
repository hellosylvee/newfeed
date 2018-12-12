import React, { Component } from 'react'
import Card from '../components/Card'
import api from '../utils/api'

class Feed extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('mounted')
    }

    render() {
        let cards = [1, 2, 3, 4];

        return( 
            // <div>
            //     <ul>{cards.map(function(c) { return <li key={c}>{c}</li>})}</ul>

            //     <ul>{cards.map(function(c) { 
            //         return (
            //             <li><Card key={c}>{c}</Card></li>
            //         )})}
            //     </ul>
            // </div>
            <div>{cards.map(function(c) { return (
                <Card key={c}>{c}</Card>
                )})}
            </div>
        )
    }
}

export default Feed;

// https://learn.tylermcginnis.com/courses/50507/lectures/760301