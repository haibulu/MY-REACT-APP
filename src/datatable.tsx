import React from 'react';
import './datatable.css'; // Import the CSS file

// Define the props type
interface User {
  id: number;
  name: string;
  email: string;
}

interface DataTableProps {
  data: User[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;