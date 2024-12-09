import { useEffect, useState } from "react"

const UseEffect = () => {
   const [count, setCount] = useState(0) 

   useEffect(()=>{
    console.log("current count:",count);
    
    //CleanUpfunction
        return ()=>{
            console.log("Cleaning the effect");
        }
   },[count])
  return (
    <div>
      <h1 className="count">Count: {count}</h1>
      <div className="count-btn">
        <button className="btn" onClick={() => setCount(count + 1)}>
          +
        </button>
        <button className="btn" onClick={() => setCount(count - 1)}>
          -
        </button>
      </div>
    </div>
  )
}
export default UseEffect