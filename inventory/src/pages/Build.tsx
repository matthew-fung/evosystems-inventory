import Container from '@/components/Base/Container'
import { BuildForm } from '@/components/BuildPlanner/BuildForm'
import CTA from '@/components/BuildPlanner/CTA'
import RunningTotal from '@/components/BuildPlanner/RunningTotal'
import React from 'react'

function BuildPlanner() {
  return (
    <Container>
      <BuildForm />
      <RunningTotal />
      <CTA />
    </Container>
  )
}

export default BuildPlanner
