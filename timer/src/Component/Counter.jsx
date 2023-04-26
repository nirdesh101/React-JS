import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const counter = count + 1;
      setCount(counter);
    }, 1000);
  });

  const refresh = () => window.location.reload(true);

  return (
    <>
      <div>
        <h1> {count} </h1>
        <button onClick={refresh}>RESET</button>
      </div>
    </>
  );
}

export default Counter;
