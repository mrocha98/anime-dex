import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav
      className="navbar is-info"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <div className="navbar-item">
          <h1 className="title has-text-white-bis">[ AnimeDex ]</h1>
        </div>
        <Link to="/" className="navbar-item">
          Search
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
