import React from 'react'

function Home() {
  const handleClick = ()=>{
    console.log("hello Buddies")
  }
  return (
    <div className='home'>
      <h1>HomePage</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Home
