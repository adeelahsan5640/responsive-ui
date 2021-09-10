import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Course from './components/Course'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <Route path='/' component={Home} exact />
      <Route path='/about' component={About} />
      <Route path='/course' component={Course} />
      <Route path='/blog' component={Blog} />
      <Route path='/contact' component={Contact} />
    </Router>
  )
}

export default App
