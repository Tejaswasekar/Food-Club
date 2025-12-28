import { useState, useEffect } from "react";

const User = ({ name, location }) => {
  const [count, setcount] = useState(0);
  const [count2, setcount2] = useState(1);
  const handleIncrease = () => {
    setcount((c) => c + 1);
    setcount2((c2) => c2 + 1);
  };

  const handleDecrease = () => {
    setcount((c) => c - 1);
    setcount2((c2) => c2 - 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer from Functional Component");
    },1000);


    return () => {
      clearInterval(timer);
      console.log("Clearing Timer");
    }
  });

  return (
    <div className="user-class">
      <h2>Count: {count}</h2>
      <button onClick={handleIncrease}>Increase Count</button>
      <button onClick={handleDecrease}>Decrease Count</button>
      <h2>Count2: {count2}</h2>
      <h3>Name: {name}</h3>
      <h3>Location: {location}</h3>
      <h3>Contact: 1234567890</h3>
    </div>
  );
};

export default User;
