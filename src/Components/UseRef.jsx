import { useEffect, useRef, useState } from "react"

const UseRef = () => {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const [text, setText] = useState('')
  const prevText = useRef(text);

  useEffect(()=>{
     console.log(prevText);
     prevText.current = text
   })

  const handleIncrement = () => {
    setCount(count + 1)
    countRef.current++

    console.log('State:', count)
    console.log('Ref:', countRef.current)
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
       <h1>Example 2</h1>
       <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
       <h2>Current Render is {text}</h2>
       <h3>Previous Render is {prev.current}</h3>
     </div>
    </div>
  )
}
export default UseRef
