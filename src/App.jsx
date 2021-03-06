import Card from "./components/Card";
import "./style.css";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => {
  const [listContacts, setListContacts] = useState([]);
  const [listContactTemporaire, setListContactTemporaire] =
    useState(listContacts);
  let history = useHistory();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setListContacts(data);
        setListContactTemporaire(data);
      });
  }, []);

  let handleClick = (idRobot) => {
    console.log(idRobot);
    history.push(`/Details/${idRobot}`);
  };

  const inputChange = (e) => {
    let valuE = e.target.value.toLowerCase();
    const filtrE = listContacts.filter((e) => {
      return e.name.toLowerCase().includes(valuE);
    });

    setListContactTemporaire(filtrE);
  };

  const renderCard = (arr) => {
    return arr.map(
      (
        { id, name, email, username, address, phone, website, company },
        index
      ) => {
        return (
          <Card
            key={index}
            url={`https://robohash.org/${id}`}
            name={name}
            id={id}
            email={email}
            address={address}
            username={username}
            phone={phone}
            website={website}
            company={company}
            handleClick={handleClick}
          />
        );
      }
    );
  };

  if (listContacts.length === 0) {
    return <h1>Chargement...</h1>;
  } else {
    return (
      <div>
        <h1>Mes amis Robots</h1>
        <div className="input-search">
          <input
            className="barSearch"
            type="search"
            placeholder="Recherche par nom"
            onChange={inputChange}
          />
        </div>
        {listContactTemporaire.length === 0 ? (
          <h2 className="text-light ">Pas de resultat</h2>
        ) : (
          <>
            <div className="container">
              <div className="row justify-content-center py-6">
                {renderCard(listContactTemporaire)}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
};

export default App;
