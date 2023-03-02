import './assests/styles/main.scss';

import React from 'react'
import { Routes, Route } from 'react-router'
import { Home } from './pages/home';
import { AppHeader } from './cpms/app-header';
import { DynamicCmp } from './cpms/dyn-cmp';

export function RootCmp() {
  return (
    <>


      <main className='full'>
        {/* <AppHeader /> */}
        <Routes>
          <Route element={<Home />} path='/' />
        </Routes>
      </main>

    </>
  )
}