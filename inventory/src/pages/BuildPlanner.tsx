import { BuildForm } from '@/components/BuildPlanner/BuildForm'
import CTA from '@/components/BuildPlanner/CTA'
import RunningTotal from '@/components/BuildPlanner/RunningTotal'
import { Button } from '@/components/ui/button'
import React from 'react'

function BuildPlanner() {
  return (
    <div>
      <BuildForm />

      <RunningTotal />
      <CTA />
    </div>
  )
}

export default BuildPlanner
