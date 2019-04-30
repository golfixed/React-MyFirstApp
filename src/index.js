import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    render() {
        return (<div className="app" >
            <div>
                <nav class="nav-div" >
                    <div class="col6" >
                        <div class="logo-div" >
                            <img src="static/img/logo.png" alt="" />
                        </div>
                        <span class="web-title"> BANGKOK EXPRESSWAY AND METRO </span>
                    </div>
                    <div class="col6 nav-item-div" >
                        <div > About </div>
                        <div > Route Maps </div>
                        <div > Projects</div>
                        <div > Contact </div>
                    </div>
                </nav>
                <div class="hero-div flex-middle">
                    <div class="hero-text" >
                        <span class="hero-title" > Most comfortable </span>
                        <span class="hero-subtitle" > Rapid Transit System </span>
                        <form class="display-flex big-searchbar">
                            <input class="big-search" name="station" placeholder="Search MRT station" />
                            <button class="big-search-btn" ><img src="static/ico/search-solid.svg" alt="" /></button>
                        </form>
                    </div>
                </div>
                <div>
                    <div class="section1 grid-container-quicklink">
                        <div class="box link1">
                            <span class="linkname-div">
                                <span class="linkname-text">MRT Route Maps</span>
                            </span>
                        </div>
                        <div class="box link2">
                            <span class="linkname-div">
                                <span class="linkname-text">Train Tickets</span>
                            </span>
                        </div>
                        <div class="box link3">
                            <span class="linkname-div">
                                <span class="linkname-text">Contact MRT</span>
                            </span>
                        </div>
                        <div class="box link4">
                            <span class="linkname-div">
                                <span class="linkname-text">Suggestion and services</span>
                            </span>
                        </div>
                        <div class="box link5">
                            <span class="linkname-div">
                                <span class="linkname-text">Fare Calculation</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
        )
    }
}

ReactDOM.render(< App />, document.getElementById('root'));