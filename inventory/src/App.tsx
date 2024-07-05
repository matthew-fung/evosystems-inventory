import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BuildList from './pages/BuildList'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/list" Component={BuildList} />
      </Routes>
    </Router>
  )
}

export default App
