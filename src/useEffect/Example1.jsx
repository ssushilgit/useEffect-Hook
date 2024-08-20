import React, { useEffect, useState } from 'react'

const Example1 = () => {

    const [count, setCount] =useState(0);
    
    useEffect(()=>{
        setTimeout(()=>{
            setCount(count=>count+1);
        },1000)
    },[count])

    // useEffect hook contains callback functions and dependencies which is optional
    // If you don’t provide a second argument, the effect runs after every render.
    // When you pass an empty array such as [], as the second argument, the effect runs only once, after the initial render.
    // When you pass an array with dependencies such as [count], the effect runs after the first render and whenever any of the dependencies change.

  return (
    <div>
        <h1>The component has rendered {count} times!</h1>
    </div>
  )
}

export default Example1