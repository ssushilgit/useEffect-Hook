import React, { useState, useEffect } from 'react'

const Example3 = () => {
    const [count, setCount] = useState(0);
    const [otherCount, setOtherCount] =useState(5);

    const increaseCount = () =>{
        setCount(count+1)
    }

    const increaseOtherCount = () =>{
        setOtherCount(otherCount + 5)
    }

    useEffect(()=>{
        document.title =`${otherCount} new messages`
    }, [otherCount])
  return (
    <div>
        <h3>{count} new messages</h3>
        <button onClick={increaseCount}>Increase</button>

        <h3>Other Count: {otherCount}</h3>
        <button onClick={increaseOtherCount}> Increase by 5</button>
    </div>
  )
}

export default Example3