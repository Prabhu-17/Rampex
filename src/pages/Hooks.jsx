import { Link } from 'react-router-dom'
import '../Components/Styles.css'

const Hooks = () => {
  return (
    <>
      <h1 style={{fontSize:"50px"}}>Hooks</h1>
      <div className="hooks" style={{fontSize:"50px"}}>
        <Link to="/useState">useState Hook</Link>
        <Link to="/useEffect">useEffect Hook</Link>
        <Link to="/useMemo">useMemo Hook</Link>
        <Link to="/useRef">useRef Hook</Link>
        <Link to="/useCallback">useCallback Hook</Link>
        <Link to="/useContext">useContext Hook</Link>
        {/* <Link to="/useReducer">useReducer Hook</Link> */}
      </div>
    </>
  )
}
export default Hooks
