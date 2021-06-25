const Card = (props) => {
  return (
    <div className="album col-md-3 py-6">
      <div
        className="card-class py-3  my-4"
        onClick={() => props.handleClick(props.id)}
      >
        <div className="text-dark">
          <div>
            <img className="profil-image" src={props.url} alt={props.url} />
          </div>
          <h2>{props.name}</h2>
          <p>{props.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
