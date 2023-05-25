import React,{useState} from 'react'

function Home() {
const [blogs, setBlogs ]=useState([
  {title: 'My new website', body:'loren ipsum...',author:'Saurabh', id:1},
  {title: 'Welcome party !', body:'loren ipsum...',author:'Yogita', id:2},
  {title: 'Web dev top tips', body:'loren ipsum...',author:'Harshada', id:3},
]);

  return (
    <div className='home'>
{blogs.map((blogs)=>(
  <div className="blog-preview" key={blogs.id}>
<h2>{blogs.title}</h2>
<p>Written by {blogs.author}</p>
  </div>
)

)}
    </div>
  )
}

export default Home
