import { useState } from "react";
import User from "./User";
import Guest from "./Guest";

const App = () => {
  const [isLogined, setLogined] = useState(false);

  return (
    <div>
      <button onClick={() => setLogined(!isLogined)}>
        {isLogined ? "Logout" : "Login"}
      </button>
      {isLogined ? <User /> : <Guest />}
    </div>
  );
};

export default App;
