import { useState } from "react"

const UseState = () => {
    const [count,setCount]=useState(0);

  return (
    <div>
        {/* <h1>useState example</h1> */}
      <h1 className="count">Count: {count}</h1>
      <div className="count-btn">
        <button className="btn" onClick={()=>setCount(count+1)}>+</button>
        <button className="btn" onClick={()=>setCount(count-1)}>-</button>
      </div>
    </div>
  )
}
export default UseState