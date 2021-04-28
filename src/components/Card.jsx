import { useState } from "react";

const Card = (props) => {
  const [details, setDetails] = useState(true);

  const handelClick = () => {
    if (details) {
      setDetails(false);
    } else {
      setDetails(true);
    }
  };
  if (!details) {
    return (
      <div className="contenair" onClick={handelClick}>
        <div className="card-class">
          <h2>{props.name}</h2>
          <p>{props.email}</p>
          <p>{props.username}</p>

          <p>{props.address.street}</p>
          <p>{props.address.suite}</p>
          <p>{props.address.city}</p>
          <p>{props.address.zipcode}</p>
          <p>{props.address.geo.lat}</p>

          <p>{props.phone}</p>

          <p>{props.website}</p>

          <p>{props.company.name}</p>
          <p>{props.company.catchPhrase}</p>
          <p>{props.company.bs}</p>

          <p></p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="contenair" onClick={handelClick}>
        <div className="card-class">
          <img className="props-image" src={props.url} alt={props.url} />
          <h2>{props.name}</h2>
          <p>{props.email}</p>
        </div>
      </div>
    );
  }
};

export default Card;
