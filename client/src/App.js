import { useState, useEffect } from 'react'
import axios from 'axios'
import { Switch, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import User from './pages/User'

function App() {
  const [users, setUsers] = useState(false)
  const location = useLocation()

  useEffect(() => {
    getUsers()
    async function getUsers() {
      const res = await axios.get('/api/users')
      setUsers(res.data)
    }
  }, [])

  return (
    <div className="py-5 bg-light" style={{ minHeight: '100vh' }}>
      {users ? (
        <Switch>
          <Route path="/user">
            <User user={users[location.pathname.split('/')[2]]} />
          </Route>
          <Route path="/">
            <Home users={users} />
          </Route>
        </Switch>
      ) : (
        <div className="display-6 text-center">Loading...</div>
      )}
    </div>
  )
}

export default App
