import { Component } from 'react';
import logo from './clipart294515.png'
import { style } from './Header.css';
import NavigationUser from './Navigation/NavigationUser';
import NavigationGuest from './Navigation/NavigationGuest';
 
class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <header className="main-header">
                <img src={logo} alt="restaurant logo" className="logo-left"/>
                <nav>
                   <NavigationUser />
                </nav>
            </header>
        )
    }
}

export default Header;