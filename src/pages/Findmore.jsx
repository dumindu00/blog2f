import { useEffect, useState } from "react";
import Card from "../components/Card"


const Findmore = () => {

    const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://blog-production-cfe2.up.railway.app/api/posts/FindMore")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);


  return (
    <div>
      <h1>Hey Find out More!</h1>
      <div className="card-container">
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

export default Findmore
