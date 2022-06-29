import React from 'react';
import findLogo from './icons/find1.png';
import './styles/App.css';
import dropDownLogo from './icons/dropDown1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import PosLine from "./components/PosLine";

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <div className="leftHeaderSide">
            <img src={dropDownLogo} className="DropDown-logo" alt="menu"/>
            </div>
            <div className="RightHeaderSide">
            <img src={findLogo} className="Find-logo" alt="find" />
            </div>
        </header>
        <nav className="App-nav-bar">
            <div className="Nav-container">
                <div className="Nav-list">
                    there will be nav menu
                </div>
            </div>
        </nav>
        <section className="App-content-container">
            <PosLine pos={{id: 1, title: "sushie", body: "content"}}/>
        </section>
        <footer className="App-footer">

        </footer>
    </div>
  );
}

export default App;
