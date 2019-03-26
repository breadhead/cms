import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { initializeStore } from '../domain/store/initializeStore'

function Index() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h2>Users</h2>
}
function AppRouter() {
  return (
    <Provider store={initializeStore()}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
        </div>
      </Router>
    </Provider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<AppRouter />, rootElement)
