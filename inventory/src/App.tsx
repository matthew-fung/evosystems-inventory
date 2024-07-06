import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BuildList from './pages/List'
import BuildPlanner from './pages/Build'
import Menu from './components/Navigation/Menu'
import Inventory from './pages/Inventory'
import Header from './components/Navigation/Header'
import Buy from './pages/Buy'
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/list" Component={BuildList} />
          <Route path="/new" Component={BuildPlanner} />
          <Route path="/inventory" Component={Inventory} />
          <Route path="/buy" Component={Buy} />
        </Routes>
        <Menu />
      </div>
    </Router>
  )
}

export default App
