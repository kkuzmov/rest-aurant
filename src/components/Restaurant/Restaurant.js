import { Component } from 'react';
import { style } from './Restaurant.css';
import { Link } from 'react-router-dom';

 
class Restaurant extends Component{
    render(){
        let url = `/details/${this.props.id}`

        return (
            <article className="restaurant">
                <img src={this.props.imageUrl} alt={this.props.name} />
                <p className="restaurant-name"><i className="fas fa-utensils"></i> {this.props.name}</p>
                <p className="restaurant-city"><i className="fas fa-map-marker-alt"></i> {this.props.location}</p>
                <p className="restaurant-rating"><i className="fas fa-smile"></i> {this.props.rating}</p>
                <Link to={url}><button className="restaurant-more-info site-button">Read more</button></Link> 
            </article>
        )
    }
}

export default Restaurant;