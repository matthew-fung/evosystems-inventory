import {
  faCirclePlus,
  faMoneyBill,
  faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className="grid grid-cols-5 fixed bottom-0 bg-white w-screen border-y-2 ">
      <Link to={`/list`}>
        <div className="text-center py-4">
          <FontAwesomeIcon icon={faScrewdriverWrench} />
          <h2>List</h2>
        </div>
      </Link>
      <Link to={`/build`}>
        <div className="text-center  py-4">
          <FontAwesomeIcon icon={faCirclePlus} />
          <h2>Build</h2>
        </div>
      </Link>
      <Link to={`/buy`}>
        <div className="text-center py-4 ">
          <FontAwesomeIcon
            icon={faMoneyBill}
            style={{ color: '#6DB65B' }}
            className="text-green"
          />
          <h2>Buy</h2>
        </div>
      </Link>
      {/* <Link to={`/inventory`}>
        <div className="text-center py-4">
          <FontAwesomeIcon icon={faWarehouse} />
          <h2>Stock</h2>
        </div>
      </Link>
      <Link to={`/stats`}>
        <div className="text-center py-4 ">
          <FontAwesomeIcon icon={faChartColumn} />
          <h2>Stats</h2>
        </div>
      </Link> */}
    </div>
  )
}

export default Menu
