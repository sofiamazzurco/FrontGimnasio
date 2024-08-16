import './App.css'
import Landing from './components/landing/landing'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <Router>
          <Landing />
        </Router>
        
      </div>
      
    </>
  )
}

export default App
