import React, { useState, useEffect } from 'react';

const App = () => {
  const [second, setSecond] = useState(0);
  const [active, setActive] = useState(false);

  function start() {
    setActive(!active);
  }

  function reset() {
    setSecond(0);
  }

  useEffect(() => {
    let interval = null;
    if (active) {
      interval = setInterval(() => {
        setSecond(second => second + 1);
      }, 1000);
    } else if (active) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [active, second]);

  return (
    <div>
      <div>
        {second}
      </div>
      <div>
        <button onClick={start}>
          start
        </button>
        <button onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;