import { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import User from './pages/User'

function App() {
  const [users, setUsers] = useState(false)

  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?results=2000')
      .then((res) => setUsers(res.data.results))
  }, [])

  console.log('hi')

  return (
    <div className="py-5">
      {users ? (
        <Router>
          <Switch>
            <Route path="/user">
              <User users={users} />
            </Route>
            <Route path="/">
              <Home users={users} />
            </Route>
          </Switch>
        </Router>
      ) : (
        <div className="display-6 text-center">Loading...</div>
      )}
    </div>
  )
}

export default App
