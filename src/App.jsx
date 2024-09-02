import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import FakeApiComponent from './Components/fakeapi';

function App() {
  return (
    <div className="App">
      <FakeApiComponent /> // Include the component in your main app
    </div>
  );
}

export default App
