import React from 'react'
import Rating from './Rating'

class MovieCard extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        const {movie}=this.props
        return(<div className='moviecard'>
            <img src={movie.image} />
            <span>{movie.title + '-' + movie.year}</span>
            <Rating count={movie.note}/>

        </div>
        )
    }
}


export default MovieCard