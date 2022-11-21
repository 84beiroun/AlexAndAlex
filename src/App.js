import React, {useRef} from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PosLine from "./components/PosLine";
import PosData from "./text_repo/positions.json"
import NavScroll from "./components/NavScroll";
import ScrollContainer from "react-indiana-drag-scroll";

let posOrder = new Map()
function importPosImgs(r) {
    let images = {};
    r.keys().forEach(item => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
}

const posImgs = importPosImgs(require.context("./assets/pos_imgs"))

function App() {
    const positions = PosData.sort(function (a, b) {
        if (a.categoryID < b.categoryID) return -1;
        if (a.categoryID > b.categoryID) return 1;
        return 0;
    });

    let addPos = (id, title, body, price) => {
        if (!posOrder.has(id)) {
            posOrder.set(id, {id: id, title: title, body: body, price: price, count: 1});
        } else {
            posOrder.set(id, {id: id, title: title, body: body, price: price, count: posOrder.get(id).count + 1})
        }
    }

    const uniquePos = [];
    positions.forEach(posData => {
        if (uniquePos.indexOf(posData.category) === -1) {
            uniquePos.push(posData.category)
        }
    });
    const list = [...Array(uniquePos.length).keys()]
    const refToCategory = list.map(() => useRef(null));
    const setRefToCategory = idx => () => {
        const next = refToCategory[idx + 1];
        if (next) {
            next.current.focus();
        }
    };
    const executeScroll = (event, i) => {
        event.preventDefault()
        document.getElementById('navbar_top').classList.remove('fixed-top');
        document.getElementById('navbar_bot').classList.remove('fixed-top');
        refToCategory[i].current.scrollIntoView()
    }

    function scrollHandler() {
        let lastScrollTop = 0
        if (window.pageYOffset > 0) {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            document.getElementById('navbar_bot').classList.remove('fixed-top');
        }
        window.addEventListener('scroll', function () {
            let state = window.scrollY
            if (state > lastScrollTop || lastScrollTop - state > 200 || state === 0) {
                document.getElementById('navbar_top').classList.remove('fixed-top');
                document.getElementById('navbar_bot').classList.remove('fixed-top');
            } else {
                document.getElementById('navbar_top').classList.add('fixed-top');
                document.getElementById('navbar_bot').classList.add('fixed-top');
            }
            lastScrollTop = state
        });
    }

    return (
        <div className="App" onLoad={scrollHandler}>
            <NavScroll posOrder={posOrder} imgs={posImgs}/>
            <div id="navbar_bot" className="App-header-bot">
                <div className="Nav-container">
                        <ScrollContainer className="Nav-list">
                        {
                            uniquePos
                                .map((uniqueData, i) => <div className="Nav-el" key={i}><p role="button"
                                                                                           className="Nav-el-text"
                                                                                           onClick={(e) =>
                                                                                               executeScroll(e, i)}>{uniqueData}</p>
                                </div>)
                        }
                        </ScrollContainer>
                </div>
            </div>
            <div className="Positions">{
                uniquePos
                    .map((category, i) => <div key={i}>
                        <h2 className="CategoryName" ref={refToCategory[i]} onChange={setRefToCategory(i)}
                            id={"category" + i}>{category}</h2>
                        <div className="PosByCat">
                            {
                                positions
                                    .map((posData) => {
                                        if (category === posData.category) {
                                            return (
                                                <PosLine imgs={posImgs} pos={posData} handler={addPos}
                                                         key={posData.id}/>)
                                        } else {
                                            return null
                                        }
                                    })
                            }
                        </div>
                    </div>)
            }
            </div>
        </div>
    );
}

export default App;
