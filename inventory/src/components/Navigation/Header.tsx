import React from 'react'

// get current page path
import { useLocation } from 'react-router-dom'

const pageHeaders = {
  '/list': 'Build List',
  '/new': 'New Build',
  '/inventory': 'Inventory',
  '/stats': `Statistics`,
}

function Header() {
  const location = useLocation()
  console.log(location.pathname)
  const pageHeader = pageHeaders[location.pathname]
  return (
    <div className="text-center py-8">
      <h1 className="font-semibold">{pageHeader}</h1>
    </div>
  )
}

export default Header
