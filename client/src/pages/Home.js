import { useHistory } from 'react-router-dom'

export default function Home({ users }) {
  const history = useHistory()
  return (
    <div className="container">
      <h1 className="text-center mb-3 mb-lg-5">Clozd Coding Test</h1>
      {users ? (
        <table
          className="table table-hover table-bordered"
          style={{ wordBreak: 'break-word' }}
        >
          <thead class="table-secondary">
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody className="user-table-body">
            {users.map((user, i) => (
              <tr
                key={`user-${i}`}
                style={{ cursor: 'pointer' }}
                onClick={() => history.push(`/user/${i}`)}
              >
                <th>{i + 1}</th>
                <td>
                  {user.name.first} {user.name.last}
                </td>
                <td>{user.email}</td>
                <td>{user.location.city}</td>
                <td>{user.location.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="display-6 text-center">Loading...</div>
      )}
    </div>
  )
}
