import React from "react";
import "../App.css"
class Banner extends React.Component{
    render(){
                return <img src={require("../img/banner.PNG")} className="Banner" alt="image of banner" />
    }
}

export default Banner;