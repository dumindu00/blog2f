

const Card = ({title, description, image, link}) => {

  return (
    <div className="card">

       <img className="card-img" src={image} alt={title} />

      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>








        {/* {link && (
          <p>
            Source: <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
          </p>
        )} */}



        {link && (
  <div className="card-link-box">
    <span>Source:</span>
    <a href={link} target="_blank" rel="noopener noreferrer">
      {link}
    </a>
  </div>
)}


        






        
      </div>

    </div>
  )
}

export default Card
