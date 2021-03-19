import { Component } from 'react';
import { style } from './HomepageUser.css';
import RestaurantHomepage from '../RestaurantHomepage/RestaurantHomepage';
import database from '../Database/Database';

class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let db = database;
        let allRestaurants = db.map(x=> x = <RestaurantHomepage imageUrl={x.imageUrl} name={x.name} description={x.description} id={x.id}/>)
        return (
        <main>
            <h1 className="top-rated">Welcome, user!</h1>
            <h1 className="top-rated">Check out our current top rated restaurants: </h1>
            <article className="all-restaurants-homepage">
            {allRestaurants}
            </article>
        </main>
        )
    }
}

export default Header;