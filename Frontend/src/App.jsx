import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Dashboard from './pages/Dashboard'
import Students from './pages/Students'




function App() {

  return (
    <div className="app-container">
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path='/students' element={<Students/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
