import Parts from '@/api/Parts'
import React from 'react'

async function Inventory() {
  // TODO: move this out of the function
  const parts = await Parts.get()
  console.log(parts)
  return <div>Inventory</div>
}

export default Inventory
