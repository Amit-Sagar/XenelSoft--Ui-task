import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="flex gap-10">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
