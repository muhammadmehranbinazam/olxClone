import React from "react";
import "../App.css";
import MobileStoreButton from "./MobileStoreButton.jsx";
const iOSUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8';
const androidUrl = 'https://play.google.com';
class LowerBanner extends React.Component {
    render() {
        return (
            <div className="lower-banner">
                <div class="container">
                    <div class="row">
                        <div class="col"><img src={require("../img/lower banner.PNG")} alt="" style={{height:"38vh",width:"60vh"}} /></div>
                        <div class="col banner-content"><h2 class="banner-heading">TRY THE OLX APP</h2>
                        <p className="banner-paragrapgh">Buy, sell and find just about anything using the app on your mobile.</p></div>
                        <div class="col"><hr  className="rotate"/>
                        <div className="store-btn">
                            <h5>GET YOUR APP TODAY</h5>
                            <div className="Andriod"><MobileStoreButton store="android" url={androidUrl} linkProps={{title: "Android Store Button"}}  /></div>
                        
                        <div className='ios'><MobileStoreButton store="ios" url={iOSUrl} linkProps={{title: "Apple Store Button"}} /></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LowerBanner;