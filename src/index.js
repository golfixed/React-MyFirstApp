import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    render() {
        return (<div className="app" >
            <div class="grid-container" >
                <nav class="nav-div" >
                    <div class="col6" >
                        <div class="logo-div" >
                            <img src="static/img/logo.png" alt="" />
                        </div>
                        <span class="web-title"> MASS RAPID TRANSIT </span>
                    </div>
                    <div class="col6 nav-item-div" >
                        <div > About </div>
                        <div > Route Maps </div>
                        <div > Projects</div>
                        <div > Contact </div>
                    </div>
                </nav>
                <div class="grid-header" >
                    <div class="hero-div flex-middle">
                        <div class="hero-text" >
                            <span class="hero-title" > Most comfortable </span>
                            <span class="hero-subtitle" > Rapid Transit System </span>
                            <form class="display-flex big-searchbar">
                                <input class="big-search" name="station" placeholder="Search MRT station" />
                                <button class="big-search-btn" ><img src="static/ico/search-solid.svg" alt=""/></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="grid-main">
                
                </div>
            </div>
        </div >
        )
    }
}

ReactDOM.render(< App />, document.getElementById('root'));