import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BuildList from './pages/List'
import BuildPlanner from './pages/Build'
import Menu from './components/Navigation/Menu'
import Inventory from './pages/Inventory'
import Header from './components/Navigation/Header'
import Buy from './pages/Buy'
import { Toaster } from './components/ui/toaster'
function App() {
  return (
    <Router>
      <div>
        <Toaster />
        <Header />
        <Routes>
          <Route path="/list" Component={BuildList} />
          <Route path="/build" Component={BuildPlanner} />
          <Route path="/inventory" Component={Inventory} />
          <Route path="/buy" Component={Buy} />
        </Routes>
        <Menu />
      </div>
    </Router>
  )
}

export default App
