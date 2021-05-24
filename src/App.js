//Gabor Catalin-Vasilica
import './App.css'
import { Container } from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Trending from './pages/Trending/Trending'
import Movies from './pages/Movies/Movies'
import Series from './pages/Series/Series'

const App = () => {
  return (
    <Router>
      <Header />
      <div className='app'>
        <Container>
          <Switch>
            <Route path='/' exact component={Trending} />
            <Route path='/movies' component={Movies} />
            <Route path='/series' component={Series} />
          </Switch>
        </Container>
      </div>
      <Navbar />
    </Router>
  )
}

export default App
