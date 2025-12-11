import { useEffect, useState } from "react";

const Admin = () => {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({
    pageName: "Home",
    title: "",
    description: "",
    link: ""
  });
  const [imageFile, setImageFile] = useState(null); // new state for file
  const [editingId, setEditingId] = useState(null);

  // Fetch posts for selected page
  const fetchPosts = () => {
    fetch(`https://blog-production-cfe2.up.railway.app/api/posts/${form.pageName}`)
      .then(res => res.json())
      .then(data => setPosts(data));
  };

  useEffect(() => {
    fetchPosts();
  }, [form.pageName]);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = editingId ? "PUT" : "POST";
    const url = editingId
      ? `https://blog-production-cfe2.up.railway.app/api/posts/${editingId}`
      : `https://blog-production-cfe2.up.railway.app/api/posts`; // backend POST route

    // Use FormData to handle optional image upload
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description); // matches backend
    formData.append("pageName", form.pageName);
    formData.append("link", form.link);
    if (imageFile) formData.append("image", imageFile);

const res = await fetch(url, {
  method: editingId ? "PUT" : "POST",
  body: formData // <-- DO NOT set headers manually
});

    await res.json();

    // Reset form
    setForm({
      pageName: form.pageName,
      title: "",
      description: "",
      link: ""
    });
    setImageFile(null);
    setEditingId(null);
    fetchPosts();
  };

  // Handle delete
  const handleDelete = (id) => {
    fetch(`https://blog-production-cfe2.up.railway.app/api/posts/${id}`, { method: "DELETE" })
      .then(res => res.json())
      .then(fetchPosts);
  };

  // Handle edit
  const handleEdit = (post) => {
    setForm({
      pageName: post.pageName,
      title: post.title,
      description: post.description, // match backend field
      link: post.link || ""
    });
    setEditingId(post._id);
    setImageFile(null); // clear file input
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Admin Panel</h1>

      <div style={{ marginBottom: "20px" }}>
        <label>Select Page: </label>
        <select
          value={form.pageName}
          onChange={(e) => setForm({ ...form, pageName: e.target.value })}
        >
          <option value="Home">Home</option>
          <option value="FindMore">FindMore</option>
          <option value="About">About</option>
        </select>
      </div>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
          style={{ height: "40px", padding: "5px" }}
        />

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
          rows={4}
          style={{ padding: "5px" }}
        />

        {/* File input for image */}
        <input
          type="file"
          onChange={(e) => setImageFile(e.target.files[0])}
        />

        <input
          type="url"
          placeholder="Source link (optional)"
          value={form.link}
          onChange={(e) => setForm({ ...form, link: e.target.value })}
          style={{ height: "40px", padding: "5px" }}
        />

        <button type="submit" style={{ padding: "10px", fontSize: "16px" }}>
          {editingId ? "Update Post" : "Add Post"}
        </button>
      </form>

      <h2 style={{ marginTop: "30px" }}>Posts</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map(post => (
          <li key={post._id} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
            <strong>{post.title}</strong> - {post.description}
            {post.image && (
              <div>
                <img src={post.image} alt={post.title} style={{ width: "150px", marginTop: "5px" }} />
              </div>
            )}
            <div style={{ marginTop: "5px" }}>
              <button onClick={() => handleEdit(post)} style={{ marginRight: "5px" }}>Edit</button>
              <button onClick={() => handleDelete(post._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
