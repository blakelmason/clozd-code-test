import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Home({ users }) {
  const [userRows, setUserRows] = useState([])
  useEffect(() => {
    let current = 0
    moreRows()
    async function moreRows() {
      if (current < users.length) {
        setTimeout(() => {
          setUserRows(users.slice(0, current + 1000))
          current += 1000
          moreRows()
        }, 0)
      }
    }
  }, [users])

  return (
    <div className="container-fluid">
      <h1 className="text-center mb-3 mb-lg-5">Clozd Code Test</h1>
      {userRows.length < 3000 ? (
        <div className="display-6 text-center">Loading. . .</div>
      ) : (
        <div className="table-responsive-sm shadow-sm">
          <table className="table table-hover table-bordered bg-white">
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
        </div>
      )}
    </div>
  )
}
