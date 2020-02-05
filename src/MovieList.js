import React from 'react'
import MovieCard from './MovieCard'

class MovieList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const {x} = this.props;
        return (
            <div className='Movielist'> 
               {x.map(el => <MovieCard movie={el} />)}
            </div>
        )
    }
}

export default MovieList