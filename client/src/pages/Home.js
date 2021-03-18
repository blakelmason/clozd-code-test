import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Home({ users }) {
  const [userRows, setUserRows] = useState([])

  useEffect(() => {
    for (let i = 0; i < users.length; i += 1) {
      setUserRows((prev) => prev.concat(users.slice(i, i + 1)))
    }
  }, [users])

  return (
    <div className="container">
      <h1 className="text-center mb-3 mb-lg-5">Clozd Code Test</h1>
      {userRows.length < users.length ? (
        <div className="display-6 text-center">Loading. . .</div>
      ) : (
        <table
          className="table table-hover table-bordered shadow-sm bg-white"
          style={{ wordBreak: 'break-word' }}
        >
          <thead className="table-secondary">
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody className="user-table-body">
            {userRows.map((user, i) => (
              <tr key={`user-${i}`}>
                <th>{i + 1}</th>
                <td>
                  <Link to={`/user/${i}`}>
                    {user.name.first} {user.name.last}
                  </Link>
                </td>
                <td>{user.email}</td>
                <td>{user.location.city}</td>
                <td>{user.location.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
