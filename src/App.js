import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Route path='/' component={Home} exact />
    </Router>
  )
}

export default App
