import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (count % 10 === 0 && count !== 0) {
      setNotification(`تبریک شما به عدد ${count} رسیدی`);
      setInterval(() => {
        setNotification(null);
      }, 3000);
    }
  }, [count]);

  return (
    <>
      <div className="container">
        <h1 className="title">شمارنده هوشمند</h1>

        <div className="countBox">
          <span className="count">{count}</span>
          <span className="even">{count % 2 === 0 ? "زوج" : "فرد"}</span>
        </div>

        <div className="result">
          <button className="plus" onClick={() => setCount(count + 1)}>
            +
          </button>
          <button className="substract" onClick={() => setCount(count - 1)}>
            _
          </button>
        </div>

        <button className="reset" onClick={() => setCount(0)}>
          بازنشانی
        </button>
      </div>
      {notification && <div className="notif">{notification}</div>}
    </>
  );
};

export default App;
