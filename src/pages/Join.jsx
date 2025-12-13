

const Join = () => {
  return (
    <div>
        <section style={{
  padding: "40px 20px",
  backgroundColor: "#f9f9f9",
  borderRadius: "10px",
  maxWidth: "600px",
  margin: "40px auto",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  textAlign: "center",
  transition: "all 0.3s ease"
}}>
  <h1 style={{
    fontSize: "2rem",
    marginBottom: "30px",
    color: "#333",
    transition: "color 0.3s ease"
  }}>Contact Info</h1>

  <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
    fontSize: "1.1rem",
    color: "#555"
  }}>
    <p style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "10px 20px",
      borderRadius: "8px",
      transition: "all 0.3s ease",
      cursor: "pointer",
      backgroundColor: "#fff"
    }}
       onMouseEnter={e => e.currentTarget.style.backgroundColor = "#e0f7fa"}
       onMouseLeave={e => e.currentTarget.style.backgroundColor = "#fff"}
    >
      📧 <span>Email: duminduviraj26@gmail.com</span>
    </p>

    <p style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "10px 20px",
      borderRadius: "8px",
      transition: "all 0.3s ease",
      cursor: "pointer",
      backgroundColor: "#fff"
    }}
       onMouseEnter={e => e.currentTarget.style.backgroundColor = "#e0f7fa"}
       onMouseLeave={e => e.currentTarget.style.backgroundColor = "#fff"}
    >
      📞 <span>Phone: 0787848596</span>
    </p>
  </div>
</section>

    </div>
  )
}

export default Join