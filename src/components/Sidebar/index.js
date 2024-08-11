import {useState} from 'react'
import './index.css'
import Products from '../Products'
import Productset2 from '../Productset2'

export default function Sidebar() {
  const [sel, setSel] = useState(false)
  const [occ, setOcc] = useState(false)
  const [work, setWork] = useState(false)
  const [far, setFar] = useState(false)
  const [seg, setSeg] = useState(false)
  const [sui, setSui] = useState(false)
  const [raw, setRaw] = useState(false)
  const [pat, setPat] = useState(false)
  const [hide, setHide] = useState(false)
  return (
    <>
      <div>
        <hr width="95%" />
        <div className="fil-con">
          <div className="row-hide">
            <h1 className="item">3425 ITEMS</h1>
            <p className="hide" onClick={() => setHide(!hide)}>
              {hide ? '< SHOW FILTER' : '< HIDE FILTER'}
            </p>
          </div>
          <div>
            <select className="rec-container">
              <option>RECOMMENDED</option>
              <option>Newest first</option>
              <option>popular</option>
              <option>Price : high to low</option>
              <option>Price : low to high</option>
            </select>
          </div>
        </div>
        <hr width="95%" />
      </div>
      {hide ? (
        <Productset2 />
      ) : (
        <div className="main-container">
          <div className="container-b">
            <div className="check">
              <input type="checkbox" />
              <p className="check-page"> Customizble</p>
            </div>
            <hr />
            <select className="sec-select" onClick={() => setSel(!sel)}>
              <option>IDEAL FOR</option>
            </select>
            <p>All</p>
            {sel ? (
              <div>
                <p className="un">Unselect all</p>
                <div className="men">
                  <input type="checkbox" />
                  <p>Men</p>
                </div>
                <div className="men">
                  <input type="checkbox" />
                  <p>Women</p>
                </div>
                <div className="men">
                  <input type="checkbox" />
                  <p>Baby&Kids</p>
                </div>
              </div>
            ) : (
              ''
            )}
            <hr />
            <select className="sec-select" onClick={() => setOcc(!occ)}>
              <option>OCCASION</option>
            </select>
            <p>All</p>
            {occ ? (
              <div>
                <p className="un">Unselect all</p>
                <div className="men">
                  <input type="checkbox" />
                  <p>Men</p>
                </div>
                <div className="men">
                  <input type="checkbox" />
                  <p>Women</p>
                </div>
                <div className="men">
                  <input type="checkbox" />
                  <p>Baby&Kids</p>
                </div>
              </div>
            ) : (
              ''
            )}
            <hr />
            <select className="sec-select" onClick={() => setWork(!work)}>
              <option>WORK</option>
            </select>
            <p>All</p>
            {work ? (
              <div>
                <p className="un">Unselect all</p>
                <div className="men">
                  <input type="checkbox" />
                  <p>Men</p>
                </div>
                <div className="men">
                  <input type="checkbox" />
                  <p>Women</p>
                </div>
                <div className="men">
                  <input type="checkbox" />
                  <p>Baby&Kids</p>
                </div>
              </div>
            ) : (
              ''
            )}
            <hr />
            <select className="sec-select" onClick={() => setFar(!far)}>
              <option>FABRIC</option>
            </select>
            <p>All</p>
            {far ? (
              <div>
                <p className="un">Unselect all</p>
                <div className="men">
                  <input type="checkbox" />
                  <p>Men</p>
                </div>
                <div className="men">
                  <input type="checkbox" />
                  <p>Women</p>
                </div>
                <div className="men">
                  <input type="checkbox" />
                  <p>Baby&Kids</p>
                </div>
              </div>
            ) : (
              ''
            )}
            <hr />
            <select className="sec-select" onClick={() => setSeg(!seg)}>
              <option>SEGMENT</option>
            </select>
            <p>All</p>
            {seg ? (
              <div>
                <p className="un">Unselect all</p>
                <div className="men">
                  <input type="checkbox" />
                  <p>Men</p>
                </div>
                <div className="men">
                  <input type="checkbox" />
                  <p>Women</p>
                </div>
                <div className="men">
                  <input type="checkbox" />
                  <p>Baby&Kids</p>
                </div>
              </div>
            ) : (
              ''
            )}
            <hr />
            <select className="sec-select" onClick={() => setSui(!sui)}>
              <option>SUITABLE FOR</option>
            </select>
            <p>All</p>
            {sui ? (
              <div>
                <p className="un">Unselect all</p>
                <div className="men">
                  <input type="checkbox" />
                  <p>Men</p>
                </div>
                <div className="men">
                  <input type="checkbox" />
                  <p>Women</p>
                </div>
                <div className="men">
                  <input type="checkbox" />
                  <p>Baby&Kids</p>
                </div>
              </div>
            ) : (
              ''
            )}
            <hr />
            <select className="sec-select" onClick={() => setRaw(!raw)}>
              <option>RAW MATERIALS</option>
            </select>
            <p>All</p>
            {raw ? (
              <div>
                <p className="un">Unselect all</p>
                <div className="men">
                  <input type="checkbox" />
                  <p>Men</p>
                </div>
                <div className="men">
                  <input type="checkbox" />
                  <p>Women</p>
                </div>
                <div className="men">
                  <input type="checkbox" />
                  <p>Baby&Kids</p>
                </div>
              </div>
            ) : (
              ''
            )}
            <hr />
            <select className="sec-select" onClick={() => setPat(!pat)}>
              <option>PATTERN</option>
            </select>
            <p>All</p>
            {pat ? (
              <div>
                <p className="un">Unselect all</p>
                <div className="men">
                  <input type="checkbox" />
                  <p>Men</p>
                </div>
                <div className="men">
                  <input type="checkbox" />
                  <p>Women</p>
                </div>
                <div className="men">
                  <input type="checkbox" />
                  <p>Baby&Kids</p>
                </div>
              </div>
            ) : (
              ''
            )}
            <hr />
          </div>
          <Products />
        </div>
      )}
    </>
  )
}
