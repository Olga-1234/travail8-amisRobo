import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Details = () => {
  const [detailsRobots, setdetailsRobots] = useState({});
  const [address, setAddress] = useState({});
  const [company, setCompany] = useState({});

  const { idRobot } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${idRobot}`)
      .then((response) => {
        return response.json();
      })
      .then((robot) => {
        setdetailsRobots(robot);
        setAddress(robot.address);
        setCompany(robot.company);
      });
  }, [idRobot]);

  return (
    <>
      <div className="container px-4 pz  text-white">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-arrow-left text-white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </Link>

        <div className="row flex-lg-row-reverse align-items-center">
          <div className="col-10 col-sm-8 col-lg-6 py-1">
            <img
              className="d-block mx-lg-auto img-fluid"
              src={`https://robohash.org/${detailsRobots.id}`}
              alt={detailsRobots.name}
            />
          </div>

          <div className="col-lg-6">
            <div className="display-5 fw-bold lh-1 mb-3">
              <h2 className="h1">{detailsRobots.name}</h2>

              <p>{detailsRobots.email}</p>
              <p>{detailsRobots.username}</p>
              <p>{detailsRobots.phone}</p>
              <p>{detailsRobots.website}</p>
              <p>{address.street}</p>
              <p>{address.suite}</p>
              <p>{address.city}</p>
              <p>{address.zipcode}</p>
              <p>{company.name}</p>
              <p>{company.catchPhrase}</p>
              <p>{company.bs}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
