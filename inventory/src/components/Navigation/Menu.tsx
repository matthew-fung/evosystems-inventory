import {
  faChartColumn,
  faCirclePlus,
  faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className="grid grid-cols-3 gap-8 fixed bottom-0 bg-white w-screen">
      <Link to={`/list`}>
        <div className="text-center py-4">
          <FontAwesomeIcon icon={faScrewdriverWrench} />
          <h2>List</h2>
        </div>
      </Link>
      <Link to={`/new`}>
        <div className="text-center  py-4 border-x-2">
          <FontAwesomeIcon icon={faCirclePlus} />
          <h2>Build</h2>
        </div>
      </Link>
      <Link to={`/stats`}>
        <div className="text-center  py-4">
          <FontAwesomeIcon icon={faChartColumn} />
          <h2>Stats</h2>
        </div>
      </Link>
    </div>
  )
}

export default Menu
