import React from 'react'
import './App.css';
import { AppUI } from './AppUI';
import { TaskProvider } from '../context/taskContext';

function App() {
  return (
    <TaskProvider>
      <AppUI />
    </TaskProvider>  
  );
}

export default App;
