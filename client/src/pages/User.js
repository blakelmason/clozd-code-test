import { Link } from 'react-router-dom'

export default function User({ user }) {
  return (
    <div className="container">
      <h1 className="text-center">User</h1>
      <div className="text-center mb-5">
        <Link to="/">Home</Link>
      </div>
      <div className="d-lg-flex align-items-center justify-content-center">
        <img
          className="border rounded shadow-sm me-lg-3 mb-3 mb-lg-0"
          src={user.picture.large}
          alt=""
        />
        <p className="mb-0">
          <strong>Name:</strong> {user.name.first} {user.name.last}
          <br />
          <strong>Email:</strong> {user.email}
          <br />
          <strong>
            <u>Address</u>
          </strong>
          <br />
          {user.location.street.number} {user.location.street.name}
          <br />
          {user.location.city}, {user.location.state} {user.location.postcode}
          <br />
          {user.location.country}
        </p>
      </div>
    </div>
  )
}
