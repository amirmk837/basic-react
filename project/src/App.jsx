import { useState } from "react";
import "./App.css";
import Person from "./Person";

const initialPersonal = [
  { name: "amir", City: "Tehran", Birth: 2005, Family: "kazemi" },
  { name: "parya", City: "Tehran", Birth: 2006, Family: "kazemi" },
  { name: "karim", City: "Tehran", Birth: 1999, Family: "kazemi" },
];

const App = () => {
  const [person, setUser] = useState(initialPersonal);

  const handleDelete = (name) => {
    setUser((prevUsers) => {
      const newPerson = prevUsers.filter((user) => user.name !== name);
      return newPerson;
    });
  };

  const setSearch = (char) => {
    const newPerson = initialPersonal.filter(
      (user) =>
        user.name.toLocaleLowerCase().includes(char.toLocaleLowerCase()) ||
        user.Birth.toString().includes(char),
    );
    setUser(newPerson);
  };

  return (
    <div>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      {person.map((user) => (
        <Person
          key={user.name}
          {...user}
          handleDelete={() => handleDelete(user.name)}
        />
      ))}
    </div>
  );
};

export default App;
