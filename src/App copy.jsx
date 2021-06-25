import Card from "./components/Card";
import "./style.css";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => {
  const [listContacts, setListContacts] = useState([]);
  const [listContactTemporaire, setListContactTemporaire] =
    useState(listContacts);
    let searchStatus = "";

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
    console.log("value contient : ", valuE);
    const filtrE = listContacts.filter((e) => {
      return e.name.toLowerCase().includes(valuE);
    });
    setListContactTemporaire(filtrE);
    searchStatus = filtrE.length === 0 && "null";
    console.log("Contact filter : ", filtrE.length === 0 && "pas de resultat");
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
         { searchStatus ===0  ? ( <h1>Chargement...</h1> ) : (
           <>
            {searchStatus ==="null"}
         <div className="allCard">{renderCard(listContactTemporaire)}</div> 
         </>
         )
         }
        
               
 
      </div>
    );
  }
};

export default App;
