import "./Card.css"
const Card = ({heading, img, description}) => {
  return (
    <div className="container">
      <div className="card">
        <div className="picture">
          <img src={img} alt="img" />
        </div>
        <div className="content">
          <h1>{heading}</h1>
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
