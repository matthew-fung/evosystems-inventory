import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/Navigation/Header'
import Menu from './components/Navigation/Menu'
import { Toaster } from './components/ui/toaster'
import BuildPlanner from './pages/Build'
import Buy from './pages/Buy'
import BuildList from './pages/List'
function App() {
  return (
    <Router>
      <div>
        <Toaster />
        <Header />
        <Routes>
          <Route path="/list" Component={BuildList} />
          <Route path="/build" Component={BuildPlanner} />
          {/* <Route path="/inventory" Component={Inventory} /> */}
          <Route path="/buy" Component={Buy} />
        </Routes>
        <Menu />
      </div>
    </Router>
  )
}

export default App
