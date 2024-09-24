import React from 'react';
import DataTable from './datatable';

// Define the data structure as a TypeScript type
interface User {
  id: number;
  name: string;
  email: string;
}

const App: React.FC = () => {
  const data: User[] = [
    { id: 1, name: 'User1', email: 'User1@example.com' },
    { id: 2, name: 'User2', email: 'User2@example.com' },
    { id: 3, name: 'User3', email: 'User3@example.com' }
  ];

  return (
    <div className="App" >
      <h1>Detail Information</h1>
      <DataTable data={data} />
    </div>
  );
}

export default App;