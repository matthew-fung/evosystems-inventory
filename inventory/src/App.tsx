import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BuildList from './pages/BuildList'
import BuildPlanner from './pages/BuildPlanner'
import Menu from './components/Navigation/Menu'
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/list" Component={BuildList} />
          <Route path="/new" Component={BuildPlanner} />
        </Routes>
        <Menu />
      </div>
    </Router>
  )
}

export default App
