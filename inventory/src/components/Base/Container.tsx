import React from 'react'

function Container(props: { children: React.ReactNode }) {
  return (
    <div className="container bg-gray-100 min-h-screen">{props.children}</div>
  )
}

export default Container
