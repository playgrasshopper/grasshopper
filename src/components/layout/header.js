import React from 'react'
import { Link } from 'gatsby'

export default () => {
  <Link to="/">Grasshopper</Link>
  <nav>
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/rules">The rules</Link>
      </li>
      <li>
        <Link to="/players">Players</Link>
      </li>
    </ul>
  </nav>
}