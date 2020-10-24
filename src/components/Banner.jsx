import React from "react";
import BannerImage from "../img/banner.PNG"
import "../App.css"
class Banner extends React.Component{
    render(){
        return(
            <div>
                <img src={BannerImage} className="Banner" alt="Banner Image"/>
            </div>
        )
    }
}

export default Banner;