import { useEffect, useState } from "react";

const User = () => {
  const [age, setAge] = useState(20);

  useEffect(() => {
    console.log("Welcom");

    return () => {
      console.log("Good Luck");
    };
  }, []);

  useEffect(() => {
    if (age == 30) {
      console.log("age is 30");
    }
    if (age >= 21) {
      console.log("age has Change");
    }
  }, [age]);

  return (
    <div>
      <h1 id="test1">User Component</h1>
      <button onClick={() => setAge((prev) => prev + 1)}>Change Age</button>
      <ul>
        <li>Name: amir</li>
        <li>Age: {age} </li>
        <li>Email: amirmk837@gmail.com </li>
      </ul>
    </div>
  );
};

export default User;
