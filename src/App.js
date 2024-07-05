import React from 'react';
import './styles.css'; 
import TableRendererComponent from './TableRendererComponent';
import { tableData } from './data';

function App() {
  return (
    <div className="App">
      <h1>Table Rendering Task</h1>
      <TableRendererComponent tableData={tableData} />
    </div>
  );
}

export default App;