// components/NewScreen.js
import React from 'react'
import builds from '@/mocks/builds.json'

import BuildListing from '@/components/BuildList/BuildListing'
import Container from '@/components/Base/Container'

const BuildList = () => {
  return (
    <Container>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 py-8 min-h-24">
        {builds.map(build => (
          <BuildListing key={build.id} build={build} />
        ))}
      </div>
    </Container>
  )
}

export default BuildList
