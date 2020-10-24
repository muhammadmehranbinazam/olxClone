import React from 'react';
class Menu extends React.Component {
    render() {
        return (
            <div className="menubar">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active bold" href="http://"><div class="btn-group">
                            <button type="button" class="btn  dropdown-toggle" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
                            <b>ALL CATEGORIES</b> <i class="fas fa-chevron-down"></i>
                            </button>
                            <div class="dropdown-menu dropdown-menu-left dropdown-menu-lg-left">
                                <button class="dropdown-item" type="button">
                                    <nav class="nav flex-column">
                                        <a class="nav-link active" href="http://">Active</a>
                                        <a class="nav-link" href="http://">Link</a>
                                        <a class="nav-link" href="http://">Link</a>
                                        <a class="nav-link disabled" href="http://" tabindex="-1" aria-disabled="true">Disabled</a>
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
                        <a className="nav-link active" href="http://">Mobile Phones</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="http://">Cars</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="http://">Motorcycles</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="http://" >Houses</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="http://" >TV-Video-Audio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="http://" >Tablets</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="http://" >Land & Plots</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu;