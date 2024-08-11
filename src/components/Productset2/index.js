import {useState, useEffect} from 'react'
import {IoMdPricetags} from 'react-icons/io'
import {MdCategory} from 'react-icons/md'

import './index.css'

export default function Productset2() {
  const [result, setResult] = useState([])

  const getData = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    setResult(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div>
        {/* <h1>Products</h1> */}
        <ul className="ui-container-2">
          {result.map(each => (
            <div className="items" key={each.id}>
              <img className="image" src={each.image} alt={each.category} />
              <h1 className="title">{each.title}</h1>
              <p className="description">{each.description}</p>
              <div className="pc">
                <IoMdPricetags />
                <p>
                  <span className="side-line">Price : </span>
                  {each.price}
                </p>
              </div>
              <div className="pc">
                <MdCategory />
                <p>
                  <span className="side-line">Category :</span> {each.category}
                </p>
              </div>
              <div className="pc2">
                <p>
                  <span className="side-line">Rating : </span>
                  {each.rating.rate}
                </p>
                <p>
                  <span className="side-line">Count : </span>
                  {each.rating.count}
                </p>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  )
}
