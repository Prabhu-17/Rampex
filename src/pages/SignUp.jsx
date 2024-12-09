import { useState } from "react"
import { NavLink } from "react-router-dom"


const SignUp = ({onSubmit}) => {
    const [FormData,setFormData]=useState({email:'',password:'',confirmPassword:''})

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData({...FormData,[name]:value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        onSubmit(FormData);
    }


  return (
    <div className="fill">
      <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
          <div className="fields">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={FormData.email}
              onChange={handleChange}
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={FormData.password}
              onChange={handleChange}
              required
            />
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Enter the same password"
              value={FormData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn">Submit</button>
            <p>Already have an account? <span><NavLink to='/login'>Login</NavLink></span></p>
          </div>
        </form>
      </div>
    </div>
  )
}
export default SignUp