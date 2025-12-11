import { useEffect, useState } from "react";
import Card from '../components/Card'

const About = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://blog-production-cfe2.up.railway.app/api/posts/About")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);


  return (
    <div>
      <h1>Hey, it’s me! Here are some of my projects—take a look at what I’ve been building.</h1>
      <div className='about'>
        {posts.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            description={post.description}
            image={post.image}
            link={post.link}
          />
        ))}
      </div>
    </div>
  )
}

export default About