import React from 'react';
import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <div>
      {/* cuando precione la palabra me redireccione a '/...' */}
      <Link>TODOS</Link>
      <Link>Add Todo</Link>
    </div>
  )
};

export default Nav;