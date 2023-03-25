import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import { StringProvider } from './context/StringContext'
import Delete from './pages/Delete'
import Home from './pages/Home'

function App() {
  return (
    <StringProvider>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":string" element={<ProtectedRoute><Delete /></ProtectedRoute>} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Router>
    </StringProvider>
  )
}

export default App