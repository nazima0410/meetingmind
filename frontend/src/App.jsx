import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Dashboard from './pages/Dashboard';
import Meetings from './pages/Meetings';
import Prep from './pages/Prep';
import Add from './pages/Add';
import Recall from './pages/Recall';
import Memory from './pages/Memory';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="meetings" element={<Meetings />} />
          <Route path="prep/:id" element={<Prep />} />
          <Route path="add" element={<Add />} />
          <Route path="recall" element={<Recall />} />
          <Route path="memory" element={<Memory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
