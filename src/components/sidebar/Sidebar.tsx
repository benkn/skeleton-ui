import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
}

export class Sidebar extends PureComponent<Props> {
  render() {
    return (
      <div className={'sidebar ' + (this.props.className || '')}>
        <h5>More Awesome</h5>
        <Link to='/about'>About</Link>
        <br />
        <a href="http://github.com/benkn/" target="_blank">Github</a>
      </div>
    );
  }
}
