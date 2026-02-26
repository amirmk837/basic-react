import { useEffect, useState } from "react";

const User = () => {
  const [age, setAge] = useState(20);

  useEffect(() => {
    console.log("send request to server");

    const handleRequest = () => {
      console.log("request sended");
    };

    const element = document.getElementById("test");
    element?.addEventListener("click", handleRequest);

    return () => {
      console.log("element removed");

      element?.removeEventListener("click", handleRequest);
    };
  }, []);

  useEffect(() => {}, []);

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
