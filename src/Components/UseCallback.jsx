import { useCallback, useState } from 'react'
import Search from './Search'
import './Styles.css'

const allUsers = [
  'Cristiano',
  'Kohli',
  'Prabhu',
  'Vikram',
  'Rampex',
  'Prasanth',
]

function shuffle(array) {
  const shuffledArray = [...array]
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    ;[shuffledArray[i], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[i],
    ]
  }
  return shuffledArray
}

const UseCallback = () => {
  const [users, setUsers] = useState(allUsers)

  const handleSearch = useCallback(
    (text) => {
      console.log(users[0]) 

      const filteredUsers = allUsers.filter((user) => user.includes(text))
      setUsers(filteredUsers) 
    },
    [users] 
  )

  return (
    <div>
      <div className=''>
        <button
          className="btn"
          style={{ marginRight: '20px' }}
          onClick={() => setUsers(shuffle(allUsers))}
        >
          Shuffle
        </button>

        <Search onChange={handleSearch} />
      </div>
      <div>
        <ul>
          {users.map((user) => (
            <li style={{ listStyle: 'none', paddingLeft:'200px' }} key={user}>
              {user}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default UseCallback
