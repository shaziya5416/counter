
import './App.css';

import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  
  const [count,setCount]=useState(0);
  const [name,setName]=useState("")
  useEffect(()=>{
    console.log('Updating')
    document.title=`You have clicked ${count} times`

  },[count])
  return (
    <>
    <input type="text" value={name} onChange={(elm)=>setName(elm.target.value)} />
     <button onClick={()=>{setCount(count+1)}}>You have clicked {count} times</button>
    </>
   
  )
}

export default App
