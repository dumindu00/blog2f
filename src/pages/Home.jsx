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
          <h1
  style={{
    fontSize: "2.5rem",
    color: "#333",
    textAlign: "center",
    margin: "40px 0",
    transition: "transform 0.3s ease, color 0.3s ease",
    cursor: "default"
  }}
  onMouseEnter={e => {
    e.currentTarget.style.color = "#0077b6";  // change color on hover
    e.currentTarget.style.transform = "scale(1.05)"; // slightly grow
  }}
  onMouseLeave={e => {
    e.currentTarget.style.color = "#333";
    e.currentTarget.style.transform = "scale(1)";
  }}
>
  Hey Welcome...!
</h1>
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
