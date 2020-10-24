import React from "react";
import '../App.css';
import search from "../svgIcons/search.svg";
import plus from '../svgIcons/plus.svg';
// import up from '../svgIcons/up.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <div className="logo">
                    <img src={require("../img/logo.png")}  alt="Search" />
                </div>
                <div className="location">
                    <img src={search} className="icon" alt="Search"/>
                    <input type="text" name="" id="" className="loctionsearch" placeholder="Search City, Area or local" />
                    
                        <div class="btn-group">
                            <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-chevron-down"></i>
                            </button>
                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
                            <button class="dropdown-item" type="button"><i class="fas fa-map-marker-alt"></i>&nbsp;&nbsp;&nbsp;Lahore</button>
                                <button class="dropdown-item" type="button"><i class="fas fa-map-marker-alt"></i>&nbsp;&nbsp;&nbsp;Faisalabad</button>
                                <button class="dropdown-item" type="button"><i class="fas fa-map-marker-alt"></i>&nbsp;&nbsp;&nbsp;Islamabad</button>
                                <button class="dropdown-item" type="button"><i class="fas fa-map-marker-alt"></i>&nbsp;&nbsp;&nbsp;Punjab</button>
                                <button class="dropdown-item" type="button"><i class="fas fa-map-marker-alt"></i>&nbsp;&nbsp;&nbsp;Pakistan</button>
                                <button class="dropdown-item" type="button"><i class="fas fa-map-marker-alt"></i>&nbsp;&nbsp;&nbsp;KPK</button>
                            </div>
                        </div>
                </div>
                <div className="itemsearch">
                    <input className="itemsearchbox" type="text" name="" id="" placeholder="Find Cars,Mobile Phones and More..." />
                    <div className="itemlogo">
                        <a href="http://"><img src={search} className="icon itemicon" /></a>
                    </div>
                </div>
                <div className="login">
                    <a href="http://" target="_blank" rel="noopener noreferrer">Login</a>
                </div>
                <div className="sellbutton">
                    <a href="http://"><img src={plus} className='icon' /> Sell</a>
                </div>
                
            </div>
        )
    }
}

export default Header;