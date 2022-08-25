import React, {useRef} from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PosLine from "./components/PosLine";
import PosData from "./text_repo/positions.json"
import NavScroll from "./components/NavScroll";
let posOrder = new Map()

function importPosImgs(r)
{
    let images = {};
    r.keys().forEach(item => { images[item.replace('./', '')] = r(item); });
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
        if (uniquePos.indexOf(posData.category)===-1){
            uniquePos.push(posData.category)
        }
    });
    const list = [...Array(uniquePos.length).keys()]
    const refToCategory = list.map(() => useRef(null));
    const setRefToCategory = idx => () => {
        const next = refToCategory[idx + 1];
        if(next){
            next.current.focus();
        }
    };
    const executeScroll = (event, i) => refToCategory[i].current.scrollIntoView()
  return (
    <div className="App">
        <NavScroll posOrder={posOrder} imgs={posImgs}/>
        <div className="App-header-bot">
            <div className="Nav-container">
                <div className="Nav-list">{
                    uniquePos
                        .map((uniqueData, i) => <p className="Nav-el" key={i} onClick={(e) => executeScroll(e, i)}>{uniqueData}</p>)
                }
                </div>
            </div>
        </div>
            <div className="Positions">{
                uniquePos
                    .map((category, i) => <div key={i}>
                       <h2 className="CategoryName" ref={refToCategory[i]} onChange={setRefToCategory(i)} id={"category" + i}>{category}</h2>
                        <div className="PosByCat">
                        {
                            positions
                                .map((posData) =>
                                {
                                    if (category === posData.category) {
                                        return (
                                            <PosLine imgs={posImgs} pos={posData} handler={addPos} key={posData.id}/>)
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
