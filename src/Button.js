// import React, { Component } from 'react'
// class Button extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             title: '',
//             note: null,
//             image: '',
//             year: null,
//         }
//     }
//     handleChange = e => {
//         this.setState({[e.target.title]: e.target.value})
//     }
//     render() {
//         return (
//             <div>
//                 <input title="title" onChange={this.handleChange} placeholder='Write your t here' value={this.state.title}/>
//                 <input title="year" onChange={this.handleChange} placeholder='Write your y here' value={this.state.year}/>
//                 <input title="age" onChange={this.handleChange} placeholder='Write your n here' value={this.state.note} />
//                 <input title="image" onChange={this.handleChange} placeholder='Write your i here' value={this.state.image}/>
//                 <button onClick={() => this.props.newUser(this.state)}> Add </button>
//             </div>
//         )
//     }
// }
// export default Button