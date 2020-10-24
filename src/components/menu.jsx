import React from 'react';
class Menu extends React.Component {
    render() {
        return (
            <div className="menubar">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active bold" href="#"><div class="btn-group">
                            <button type="button" class="btn  dropdown-toggle" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
                            <b>ALL CATEGORIES</b> <i class="fas fa-chevron-down"></i>
                            </button>
                            <div class="dropdown-menu dropdown-menu-left dropdown-menu-lg-left">
                                <button class="dropdown-item" type="button">
                                    <nav class="nav flex-column">
                                        <a class="nav-link active" href="#">Active</a>
                                        <a class="nav-link" href="#">Link</a>
                                        <a class="nav-link" href="#">Link</a>
                                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                    </nav>
                                </button>
                                <button class="dropdown-item" type="button">Faisalabad</button>
                                <button class="dropdown-item" type="button">Islamabad</button>
                                <button class="dropdown-item" type="button">Punjab</button>
                                <button class="dropdown-item" type="button">Pakistan</button>
                                <button class="dropdown-item" type="button">KPK</button>
                            </div>
                        </div></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Mobile Phones</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Cars</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Motorcycles</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" >Houses</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" >TV-Video-Audio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" >Tablets</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" >Land & Plots</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu;