import React from "react";
import BannerImage from "../img/banner.PNG"
import "../App.css"
class Banner extends React.Component{
    render(){
        return(
            <div>
                <img src={BannerImage} className="Banner"/>
            </div>
        )
    }
}

export default Banner;