import React from "react";
import BannerImage from "../img/banner.PNG"
import "../App.css"
class Banner extends React.Component{
    render(){
                return <img src={BannerImage} className="Banner" alt="image of banner" />
    }
}

export default Banner;