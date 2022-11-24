import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {MainConts, VidoeConts, ChannelConts, SearchConts, HeaderConts} from './compnents'

const App = () => {
  return (
    <BrowserRouter>
    <HeaderConts />
      <Routes>
        <Route path='/' element={<MainConts />}></Route>
        <Route path='/video/:id' element={<VidoeConts />}></Route>
        <Route path='/channel/:id' element={<ChannelConts />}></Route>
        <Route path='/search/:searchTerm' element={<SearchConts />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App