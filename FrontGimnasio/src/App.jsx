import './App.css'
import Footer from './components/footer/Footer'
import Landing from './components/landing/landing'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <Router>
          <Landing />
          <Footer />
        </Router>
        
      </div>
      
    </>
  )
}

export default App
