import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Course from './components/Course'
function App() {
  return (
    <Router>
      <Route path='/' component={Home} exact />
      <Route path='/course' component={Course} />
    </Router>
  )
}

export default App
