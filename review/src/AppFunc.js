import React, { useState, useEffect } from "react";

const AppFunc = () => {
  console.log('AppFunc: Setup State.');
  const [name, setName] = useState("Warren");

  useEffect(() => {
    console.log('AppFunc: Component Has Mounted.');
  }, []);

  useEffect(() => {
    console.log('AppFunc: Component Has Updated.');
  });
  
  const handleClick = () => {
    console.log('-----------------')
    console.log('AppFunc: State Changes.');
    setName("Allison");
  };

  console.log('AppFunc: Rendering our DOM.');
  return (
    <div>
      <h1>Hello {name}!</h1>
  
      <button onClick={handleClick}>MAKE IT ALLISON!</button>
    </div>
  );
};

export default AppFunc;
