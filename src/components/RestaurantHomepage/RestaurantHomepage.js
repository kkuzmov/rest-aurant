import { Component } from 'react';
import { style } from './RestaurantHomepage.css';
import { Link } from 'react-router-dom';
 
class RestaurantHomepage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let url = `/details/${this.props.id}`

        return (
            <article className="restaurant-card card-user">
                <img src={this.props.imageUrl} alt={this.props.name}/>
                <h4>{this.props.name}</h4>
                <p>{this.props.description}</p>
                <Link to={url}><button className="site-button">Read more</button></Link>
                
            </article>
        )
    }
}

export default RestaurantHomepage;