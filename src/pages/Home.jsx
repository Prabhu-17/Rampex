import { Link } from 'react-router-dom'
import '../Components/Styles.css'

const Home = () => {
  return (
    <>
      <div className="body">
        <h1>Home</h1>
        <div className="hooks">
          <Link to="/hooks">Hooks</Link>
          <Link to="/git">Git</Link>
        </div>
      </div>
    </>
  )
}
export default Home
