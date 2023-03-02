import './assests/styles/main.scss';

import React from 'react'
import { Routes, Route } from 'react-router'
import { Home } from './pages/home';
import { DynamicCmp } from './cmps/dyn-cmp';

export function RootCmp() {
  return (
    <>


      <main className='full'>
        <Routes>
          <Route element={<Home />} path='/' />
        </Routes>
      </main>

    </>
  )
}