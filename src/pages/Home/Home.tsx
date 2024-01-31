import React, { useState } from 'react';

import { Loading } from '../../components/loading';

export function Home() {
  const [showLoading, setShowLoading] = useState(false);
  return (
    <div>
      <div>
        <p>Hello World!</p>
        <p>This skeleton site is useful for starting a basic web application.</p>

        <div>
          Here is a state demo:
          <button style={{ marginLeft: '2rem' }} onClick={() => setShowLoading(!showLoading)}>
            Toggle Loading
          </button>
        </div>
        {showLoading ? <Loading /> : null}
      </div>
    </div>
  );
}
