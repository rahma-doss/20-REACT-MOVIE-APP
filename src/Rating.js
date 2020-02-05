import React, {Component} from 'react'

class Rating extends Component{
 

    render(){
        let arrayOfStars = []
        for(let i = 0; i < 5; i++){
            if(this.props.count > i){
                arrayOfStars.push(<i onClick={() => this.props.rateIt( i+1)} class="fas fa-star"></i>)
            }else{
                arrayOfStars.push(<i onClick={() => this.props.rateIt( i+1)} class="far fa-star"></i>)
            }
        }
        return(
            <div>
                
                {arrayOfStars}
            </div>
        )
    }
}

export default Rating