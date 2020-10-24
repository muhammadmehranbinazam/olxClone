import React from "react";
import "../App.css";
import MobileStoreButton from "../components/MobileStoreButton.jsx";
const iOSUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8';
const androidUrl = 'https://play.google.com';
class FooterInformation extends React.Component {
    render() {
        return (
            <div >
                <div class="container information-links">
                    <div class="row">
                        <div class="col">
                            <b>POPULAR CATEGORIES</b><br />
                            <a href="http://">Cars</a><br />
                            <a href="http://">Flats for rent</a><br />
                            <a href="http://">Jobs</a><br />
                            <a href="http://">Mobile Phones</a><br />
                            <a href="http://"></a><br />

                        </div>
                        <div class="col">

                            <b>TRENDING SEARCHES</b><br />
                            <a href="http://">Bikes</a><br />
                            <a href="http://">Watches</a><br />
                            <a href="http://">Books</a><br />
                            <a href="http://">Dogs</a><br />

                        </div>
                        <div class="col">

                            <b>ABOUT US</b><br />
                            <a href="http://">About OLX Group</a><br />
                            <a href="http://">OLX Blog</a><br />
                            <a href="http://">Contact Us</a><br />
                            <a href="http://">OLX for Businesses</a><br />

                        </div>
                        <div class="col">

                            <b>OLX</b><br />
                            <a href="http://">Help</a><br />
                            <a href="http://">Sitemap</a><br />
                            <a href="http://">Legal & Privacy information</a><br />

                        </div>
                        <div class="col">
                            <b>FOLLOW US</b><br />

                            <a class="fb-ic mr-3" role="button"><i class="fab fa-lg fa-facebook-f"></i></a>
                            <a class="tw-ic mr-3" role="button"><i class="fab fa-lg fa-twitter"></i></a>
                            <a class="ins-ic mr-3" role="button"><i class="fab fa-lg fa-instagram"></i></a>
                            <a class="yt-ic mr-3" role="button"><i class="fab fa-lg fa-youtube"></i></a>
                            <div className="Andriod"><MobileStoreButton store="android" width="300px" height="100px" url={androidUrl} linkProps={{title: "Android Store Button"}} style={{position:"relative",left:"100px",top:"30px"}} /></div>
                        
                        <div className='ios'><MobileStoreButton store="ios"  url={iOSUrl} linkProps={{title: "Apple Store Button"}} style={{position:"relative",left:"50px",top:"70px"}}/></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default FooterInformation;