import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BuildList from './pages/BuildList'
import BuildPlanner from './pages/BuildPlanner'
import Menu from './components/Navigation/Menu'
import Inventory from './pages/Inventory'
import Header from './components/Navigation/Header'
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/list" Component={BuildList} />
          <Route path="/new" Component={BuildPlanner} />
          <Route path="/inventory" Component={Inventory} />
        </Routes>
        <Menu />
      </div>
    </Router>
  )
}

export default App
