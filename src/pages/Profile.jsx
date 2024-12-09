import React, { useContext } from 'react'
import { UserContext } from '../Components/UserContext'

const Profile = () => {
  const { user, login } = useContext(UserContext)

  return (
    <div
      style={{
        marginTop: '20px',
        textAlign: 'center',
      }}
    >
      {!user ? (
        <div>
          <h2>Please Log In</h2>
          <button
            onClick={() => login('John Doe')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
            }}
          >
            Login as John Doe
          </button>
        </div>
      ) : (
        <div>
          <h2>User Profile</h2>
          <p>Name: {user.name}</p>
        </div>
      )}
    </div>
  )
}

export default Profile
