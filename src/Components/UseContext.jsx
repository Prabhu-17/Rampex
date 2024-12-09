import { UserProvider } from './UserContext'
import Header from '../pages/Header'
import Profile from '../pages/Profile'

const UseContext = () => {
  return (
    <UserProvider>
      <Header />
      <Profile />
    </UserProvider>
  )
}
export default UseContext
