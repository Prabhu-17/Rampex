
import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom'
import { About, ContactUs, Home, Login, Services, SignUp } from './pages'
import Footer from './Components/Footer'
import UseState from './Components/UseState'
import UseEffect from './Components/UseEffect'
import UseMemo from './Components/UseMemo'
import UseRef from './Components/UseRef'
import UseCallback from './Components/UseCallback'
import UseContext from './Components/UseContext'
import UseReducer from './Components/UseReducer'


function App() {
  
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/useState" element={<UseState />} />
          <Route path="/useEffect" element={<UseEffect />} />
          <Route path="/useMemo" element={<UseMemo />} />
          <Route path="/useRef" element={<UseRef />} />
          <Route path="/useCallback" element={<UseCallback />} />
          <Route path="/useContext" element={<UseContext />} />
          <Route path="/useReducer" element={<UseReducer />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
