import { Component } from "react";
import { style } from "./AllRestaurants.css";
import { db } from "../../firebase/firebase.config";
import { Circle, Heart, Ellipsis } from "react-spinners-css";

import RestaurantInAllRestaurants from "../RestaurantInAllRestaurants/RestaurantInAllRestaurants";

class AllRestaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      currentRestaurants: [],
    };
    this.getRestaurants = this.getRestaurants.bind(this);
    this.performSearch = this.performSearch.bind(this);
  }
  getRestaurants() {
    db.collection("restaurants")
      .get()
      .then((res) => {
        let allFetched = [];
        res.docs.forEach((restaurant) => {
          allFetched.push({ ...restaurant.data(), id: restaurant.id });
        });
        this.setState({ restaurants: allFetched });
        this.setState({ currentRestaurants: allFetched });
      })
      .catch((err) => console.log(err));
  }
  componentDidMount() {
    this.getRestaurants();
  }
  performSearch(event) {
    event.preventDefault();
    let filteredResults = this.state.restaurants.filter(
      (rest) =>
        rest.name
          .toLowerCase()
          .includes(event.target.search.value.toLowerCase()) ||
        rest.location
          .toLowerCase()
          .includes(event.target.search.value.toLowerCase()) ||
        rest.description
          .toLowerCase()
          .includes(event.target.search.value.toLowerCase())
    );
    this.setState({ currentRestaurants: filteredResults });
  }
  render() {
    let allRestaurants = this.state.currentRestaurants.map(
      (x) =>
        (x = (
          <RestaurantInAllRestaurants
            key={x.id}
            imageUrl={x.imageUrl}
            name={x.name}
            description={x.description}
            location={x.location}
            category={x.category}
            id={x.id}
          />
        ))
    );

    if (allRestaurants.length === 0) {
      allRestaurants = <Ellipsis color="#513C2C" size={100} />;
    }

    return (
      <>
        <h1 className="page-heading">All restaurants</h1>
        <form onSubmit={this.performSearch} className="search-form">
          <label htmlFor="search" className="search-label">
            Search in restaurants
          </label>
          <input type="search" name="search" className="search-input"></input>
          <input type="submit" value="Find" className="site-button"></input>
        </form>
        <article className="all-rated-restaurants">{allRestaurants}</article>
      </>
    );
  }
}

export default AllRestaurants;
