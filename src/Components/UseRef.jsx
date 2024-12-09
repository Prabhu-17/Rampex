import { useEffect, useRef, useState } from "react"

const UseRef = () => {
  const [count,setCount]=useState(0)
  const countRef=useRef(0)

 const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleIncrement =()=>{
    setCount(count+1)
    countRef.current++;

    console.log('State:',count);
    console.log('Ref:',countRef.current);  
  }


  return (
    <div>
      <h1 className="count">Count: {countRef.current}</h1>
      <div className="count-btn">
        <button className="btn" onClick={handleIncrement}>
          +
        </button>
        <button className="btn" onClick={() => setCount(count - 1)}>
          -
        </button>
      </div>
      <div>
        <h1>Example 2:</h1>
        <input ref={inputRef} type="text" placeholder="Type something..." />
      </div>
    </div>
  )
}
export default UseRef