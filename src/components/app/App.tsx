import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../header';
import { Sidebar } from '../sidebar';
import { Footer } from '../footer';

import '../../styles/global.css';
import '../../styles/normalize.css';
import '../../styles/skeleton.css';

export function App() {
  return (
    <>
      <Header />
      <main className='row'>
        <div className='nine columns'>
          <Outlet /> {/* Router renders paths here */}
        </div>

        <Sidebar className='three columns' />
      </main>
      <Footer />
    </>
  );
}
