import React from 'react';
import findLogo from './icons/find1.png';
import './styles/App.css';
import dropDownLogo from './icons/dropDown1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import PosLine from "./components/PosLine";
import PosData from "./text_repo/positions.json"

function App() {
    const positions = PosData.sort(function (a, b) {
        if (a.category.toLowerCase() < b.category.toLowerCase()) return -1;
        if (a.category.toLowerCase() > b.category.toLowerCase()) return 1;
        return 0;
    });
    const uniquePos = [];
    positions.forEach(posData => {
        if (uniquePos.indexOf(posData.category)===-1){
            uniquePos.push(posData.category)
        }
    });
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
                <div className="Nav-list">{
                    uniquePos
                        .map((uniqueData, i) => <p className="Nav-el" key={i} id={"group" + i}>{uniqueData}</p>)
                }
                </div>
            </div>
        </nav>
        <section className="App-content-container">
            <div className="Positions">{
                uniquePos
                    .map((category, i) => <div key={i}>
                       <h2 className="CategoryName" id={"category" + i}>{category}</h2>
                        {
                            positions
                                .map((posData) =>
                                {
                                    if (category === posData.category) {
                                        return (
                                        <div key={posData.id}>
                                            <PosLine pos={posData}/>
                                        </div>)
                                    } else {
                                        return null
                                    }
                                })
                        }
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
