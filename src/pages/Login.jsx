import { useState } from "react";
import { NavLink } from "react-router-dom"
import './Login.css'

const Login = ({onSubmit}) => {
    const [formData,setFormData]=useState({email:"",password:""})

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({...formData,[name]:value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        onSubmit(formData);
    }
  return (
    <>
      <div className="fill">
        <div className="container">
          <form onSubmit={handleSubmit}>
            {/* <h1>Login</h1> */}
            <div className="fields">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email ID"
                required
              />
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your Password"
                required
              />
            </div>
            <button type="submit" className="btn">Login</button>
            <p>
              Don't have an account?
              <span>
                {' '}
                <NavLink to="/signup">Sign Up</NavLink>
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
export default Login