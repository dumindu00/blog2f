import { useEffect, useState } from 'react';
import Card from '../components/Card'


const Home = () => {


  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/posts/Home`)
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>

        <div className='card-container'>
              {posts.map((post) => (
                <Card
                  key={post._id}
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

export default Home
