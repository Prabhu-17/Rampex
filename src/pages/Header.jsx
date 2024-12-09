import { useContext } from 'react'
import { UserContext } from '../Components/UserContext'

const Header = () => {
  const { user, logout } = useContext(UserContext)

  return (
    <header
      style={{
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px',
        textAlign: 'center',
      }}
    >
      <h1>Welcome {user ? user.name : 'Guest'}</h1>
      {user && (
        <button
          onClick={logout}
          style={{
            marginTop: '10px',
            padding: '5px 10px',
            backgroundColor: 'red',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Logout
        </button>
      )}
    </header>
  )
}

export default Header
