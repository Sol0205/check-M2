import React from 'react';
import Todos from '../Todos/Todos';

export function Home() {
  return (
    <div>
      {/* agregarle un status */}
      <Todos />
      <Todos />
      <Todos status="Done"/>
    </div>
  )
};

export default Home;