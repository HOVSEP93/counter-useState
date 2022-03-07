import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increscent = () => {
    setCount(count + 1);
  };

  const decrescent = () => {
    setCount(count - 1);
  };

  return (
    <React.Fragment>
      <h1>React hooks useState</h1>

      <div className="content">
        <button className="button" onClick={decrescent}>
          -
        </button>
        <span>{count}</span>
        <button className="button" onClick={increscent}>
          +
        </button>
      </div>
    </React.Fragment>
  );
};

export default App;
