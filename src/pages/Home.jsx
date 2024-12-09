import { Link } from 'react-router-dom'
import '../Components/Styles.css'

const Home = () => {
  return (
    <>
      <div className="body">
        <h1>Home</h1>
        <div className="hooks">
          <Link to="/useState">useState Hook</Link>
          <Link to="/useEffect">useEffect Hook</Link>
          <Link to="/useMemo">useMemo Hook</Link>
          <Link to="/useRef">useRef Hook</Link>
          <Link to="/useCallback">useCallback Hook</Link>
          <Link to="/useContext">useContext Hook</Link>
          {/* <Link to="/useReducer">useReducer Hook</Link> */}
        </div>
      </div>
    </>
  )
}
export default Home
