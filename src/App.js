import React from 'react';
import findLogo from './icons/find1.png';
import './styles/App.css';
import dropDownLogo from './icons/dropDown1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import PosLine from "./components/PosLine";
import PosData from "./text_repo/positions.json"

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
            <div className="Positions">
                {
                    PosData
                        .sort(function (a,b) {
                            if(a.category.toLowerCase() < b.category.toLowerCase()) return -1;
                            if(a.category.toLowerCase() > b.category.toLowerCase()) return 1;
                            return 0;
                        })
                        .map((posData) => <div key={posData.id}>
                        <h2>{posData.category}</h2>
                        <PosLine pos={posData}/>
                    </div>)
                }
            </div>
        </section>
        <footer className="App-footer">

        </footer>
    </div>
  );
}

export default App;
