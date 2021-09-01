import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../Home/index'
import About from '../About/About'
const routeModules = [
  {
    path: '/',
    name: 'Home',
    curPath: '../Home/index',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    curPath: '../About/About',
    component: About
  },
]
class App extends React.Component {

  render() {
    return (
      <div>
        <header>
          {routeModules.map(route => {
            return <Link to={route.path}>{route.name}</Link>
          })}
        </header>

        <main>
          {routeModules.map(route => {
            return <Route path={route.path} key={route.path} exact component={route.component}></Route>
          })}
        </main>
      </div>
    )
  }
}
export default App