import React from 'react'
import Rating from './Rating'


class MovieSearch extends React.Component {
    
   
    render(){
    return(
        <div className = 'movieNav' >
            <div className='movie-nav'>
                <input placeholder='Type movie name to search' onChange={e => this.props.rummage(e.target.value)} type="search"  />
                <button>Search</button>
            </div>
            <div>
            <p>Minumum Rating</p>
            </div>
        </div>
    );
}
}



export default MovieSearch