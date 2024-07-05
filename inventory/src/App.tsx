import builds from '@/mocks/builds.json'

import React from 'react'
import BuildListing from '../components/BuildList/BuildListing'

function App() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 container py-8 min-h-screen bg-gray-100">
      {builds.map(build => (
        <BuildListing build={build} />
      ))}
    </div>
  )
}

export default App
