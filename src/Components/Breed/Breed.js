import React from 'react';
import axios from 'axios';


class Breed extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            img : null,
        }
        
    }

    fetchImg(breed) {

        axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then( res => this.setState({img: res.data.message}))
    }

    render(){
        return (

            <div>
                <h2>{this.props.breed}</h2>
                <button onClick={() => this.fetchImg(this.props.breed)}>Random Dog</button>
                <img src={this.state.img} alt={this.props.breed}/>
            </div>
        )
    }
    



}



export default Breed;