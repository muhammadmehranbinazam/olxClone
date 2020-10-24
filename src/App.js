import React from 'react';
import './App.css';
import Header from "../src/components/header.jsx";
import BootstrapNavbar from '../src/components/menu.jsx';
import Banner from './components/Banner';
import CSSGrid from "./components/lastSearch.jsx"
import FreshRecomendations from "./components/FreshRecommendations.jsx"
import LowerBanner from "./components/lowerBanner.jsx";
import FooterInformation from "./components/FooterInformation.jsx";
import Footer from "./components/footer.jsx";
class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="">
          <BootstrapNavbar />
        </div>
        <div>
          <Banner />
        </div>
        <div>
          <CSSGrid text="Based on your last search"/>
        </div>
        <div>
          <FreshRecomendations text="Fresh Recomendations"/>
        </div>
        <div>
          <LowerBanner />
        </div>
        <div className="footer-information">
          <FooterInformation />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;