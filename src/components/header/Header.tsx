import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export class Header extends PureComponent {
  render() {
    return (
      <header>
        <h1 style={{ marginTop: '0.25em' }}>
          <Link to='/'>Skeleton UI</Link>
        </h1>
      </header>
    );
  }
}
