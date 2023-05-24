import React from 'react'

function Home() {
  const handleClick = ()=>{
    console.log("hello Buddies")
  }
  const handlClickAgain =(name)=>{
    console.log("hello " +name)
  }
  return (
    <div className='home'>
      <h1>HomePage</h1> 
      <button onClick={handleClick}>Click me</button>
      <button onClick={()=>{handlClickAgain('Sau')}}>Click me Again</button>
    </div>
  )
}

export default Home
