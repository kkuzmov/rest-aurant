import "./Navigation.css";
import { Link } from "react-router-dom";
import { logoutUser } from "../../../services/services";

function NavigationUser() {
  function logout() {
    logoutUser().then((res) => console.log("user is logged out!"));
  }

  return (
    <>
      <div className="navigation">
        <Link to="/create" className="nav-link">
          Create-a-rate
        </Link>
        <Link to="/all-restaurants" className="nav-link">
          Restaurants
        </Link>
        <Link to="/profile" className="nav-link">
          Profile
        </Link>
        <Link to="" className="nav-link" onClick={logout}>
          Logout
        </Link>
      </div>
    </>
  );
}

export default NavigationUser;
