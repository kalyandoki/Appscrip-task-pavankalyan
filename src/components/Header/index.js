import {IoSearchOutline} from 'react-icons/io5'
import {MdOutlinePerson, MdOutlineShoppingBag} from 'react-icons/md'
import {IoMdHeartEmpty, IoLogoDribbble} from 'react-icons/io'

import './index.css'

export default function Header() {
  return (
    <>
      <div className="container">
        <div>
          <IoLogoDribbble className="logo" />
        </div>
        <div>
          <h1 className="head-logo">LOGO</h1>
        </div>
        <div className="icon-container">
          <IoSearchOutline className="icon" />
          <IoMdHeartEmpty className="icon" />
          <MdOutlinePerson className="icon" />
          <MdOutlineShoppingBag className="icon" />
          <select className="select-con">
            <option>ENG</option>
            <option>AR</option>
            <option>EL</option>
          </select>
        </div>
      </div>
      <div className="head-lines">
        <h1>SHOP</h1>
        <h1>SKILLS</h1>
        <h1>STORIES</h1>
        <h1>ABOUT</h1>
        <h1>CONTACT US</h1>
      </div>
      <hr />
      <div className="sen-container">
        <h1 className="d-head">DISCOVER OUR PRODUCTS</h1>
        <p className="d-para">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
    </>
  )
}
