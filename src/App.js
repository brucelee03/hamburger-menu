import {Route, Switch, Redirect} from 'react-router-dom'

import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route path="/bad-path" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </>
)

export default App
