import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('root'));

const customModalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '900px',
        padding: '40px 20px',
        borderRadius: '10px'
    }
};

class Btn extends React.Component {
    render() {
        return (
            <button className="BtnStyle">
                {this.props.text}
            </button>
        )
    }
}

function Quicklinkbox(props) {
    var style = QlStyle(props.img)
    if (props.column) {
        style.gridColumn = 'span ' + props.column
    }
    return (<div className="box link1" style={style}>
        <span className="linkname-div">
            <span className="linkname-text">{props.title}</span>
        </span>
    </div>);
}

const QlStyle = (bg) => {
    return {
        background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(2, 2, 2, 0.5)), url(' + bg + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'red'
    }
};

class ViewHome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            MRTInfoModal: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal() {
        this.setState({ MRTInfoModal: true });
    }
    closeModal() {
        this.setState({ MRTInfoModal: false });
    }
    render() {
        return (
            <div>
                <section className="hero-div flex-middle">
                    <div className="hero-text" >
                        <h1 className="hero-title"> Most comfortable </h1>
                        <h2 className="hero-title"> Rapid Transit System </h2>
                        <form className="display-flex big-searchbar">
                            <input className="big-search" name="station" placeholder="Search MRT station" />
                            <button className="big-search-btn" ><img src="static/ico/search-solid.svg" alt="" /></button>
                        </form>
                    </div>
                </section>
                <section className="section2">
                    <div className="grid-container-quicklink">
                        <Quicklinkbox title="MRT Route Maps" img="/static/img/link1.png" />
                        <Quicklinkbox title="Train Tickets" img="/static/img/link2.png" />
                        <Quicklinkbox title="Contact MRT" img="/static/img/link3.jpg" />
                        <Quicklinkbox title="Suggestion and Services" img="/static/img/link4.jpg" column={2} />
                        <Quicklinkbox title="Fare Calculation" img="/static/img/link5.jpg" />
                    </div>
                    <div className="grid-container-paragraph1">
                        <div className="paragraph-box p1-image">
                        </div>
                        <div className="paragraph-box">
                            <div>
                                <h3 className="h3-light">Thank you for using the MRT</h3>
                                <h4 className="readmore" onClick={this.openModal}>Find out more about the MRT</h4>
                                <Modal
                                    isOpen={this.state.MRTInfoModal}
                                    onRequestClose={this.closeModal}
                                    style={customModalStyles}
                                >
                                    <div className="">
                                        <h3>Bangkok MRT</h3>
                                    </div>
                                    <div>
                                        <p style={{ textIndent: '20px' }}>The Bangkok MRT underground runs underneath Rama IV and Ratchadapisek Roads, the two thoroughfares that cut through the heart of downtown Bangkok. Although additional lines and extensions are in the pipeline, it currently only comprises the blue line, serving 18 stations from Hua Lamphong to Bang Sue. Trains every five minutes in peak times (07:00 - 09:00, 16:00 - 19:00) and every seven minutes at other times.</p>
                                        <a href="http://www.bangkok.com/information-travel-around/mrt.htm?cid=ch:OTH:001">read more</a>
                                        <button className="readmore" onClick={this.closeModal}>Close</button>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </div>
                    <article className="grid-container-paragraph2">
                        <header className="ar-header-box p2-bg">
                            <h3 className="ar-h3">The effects of Mass Rapid Transit (MRT) systems on land values</h3>
                        </header>
                        <p className="p-box">Investigates the evolution of mass rapid transit (MRT) in relation to the Hong Kong market and analyses the effect of surrounding land values. Outlines the unique features of Hong Kong which make an urban railway system ideal and discusses the changes brought about by MRT. Summarizes the growth of commercial development on Hong Kong island and gives case studies on the Admiralty, Sheung Wan and Taikooshing/Kornhill areas in respect of their development with the advent of MRT. Notes that the shortening of travelling time for workers has increased demand for, and hence the price of, sites immediately adjacent to MRT stations.</p>
                    </article>
                </section>
            </div>
        )
    }
}

class ViewContact extends React.Component {
    render() {
        return (
            <div className="grid-container-contact">
                <h1>CONTACT</h1>
                <div className="contact-box">
                    <form className="card">
                        <div>
                            <span className="form-text">Contact name:</span>
                            <input className="textfield" type="text" placeholder="Jon Snow" required />
                        </div>
                        <div>
                            <span className="form-text">Email:</span>
                            <input className="textfield" type="email" placeholder="example@mail.com" required />
                        </div>
                        <Btn text="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}

class ViewAbout extends React.Component {
    render() {
        return (
            <div className="grid-container-contact">
                <h1>ABOUT</h1>
            </div>
        )
    }
}

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.changePage = this.changePage.bind(this)
    }

    changePage(input) {
        this.props.navClick(input)
    }
    render() {
        return (
            <nav className="nav-div" >
                <div className="col6"  onClick={() => this.changePage('1')}>
                    <div className="logo-div" >
                        <img src="static/img/logo.png" alt="" />
                    </div>
                    <span className="web-title"> BANGKOK EXPRESSWAY AND METRO </span>
                </div>
                <ul className="col6 nav-item-div" style={{}}>
                    <li onClick={() => this.changePage('2')}> About </li>
                    <li> Route Maps </li>
                    <li> Projects</li>
                    <li onClick={() => this.changePage('5')}> Contact </li>
                    {/* <li onClick={() => {this.props.navClick('5')}}> Contact 2 </li> */}
                </ul>
            </nav>
        )
    }
}

class View extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.page === '1' ?
                        <ViewHome /> :
                        this.props.page === '2' ?
                            <ViewAbout /> :
                            this.props.page === '5' ?
                                <ViewContact /> :
                                <ViewHome />
                }
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: '1'
        }
        this.navClick = this.navClick.bind(this)
    }

    navClick(view) {
        this.setState({ page: view })
    }

    render() {
        return (
            <div className="app">
                <Navbar navClick={this.navClick} />
                <View page={this.state.page} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));