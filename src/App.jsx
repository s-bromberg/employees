import './stylesheets/App.css';
import AddBonusBtn from './AddBonusBtn';
import BonusTable from './BonusTable';
import employeesData from './employees/employeesData';
import { useState } from 'react';
import EmployeeCard from './EmployeeCard';

function App() {
  const [employees, setEmployees] = useState(
    localStorage.employees ? JSON.parse(localStorage.employees) : employeesData
  );
  console.log(employees)
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <div id='app'>
      <BonusTable
        employees={employees}
        setEmployees={setEmployees}
        setSelectedEmployee={setSelectedEmployee}
      />
      <AddBonusBtn
        employees={employees}
        setEmployees={setEmployees}
      />
      <EmployeeCard
        employees={employees}
        employee={selectedEmployee}
        setSelectedEmployee={setSelectedEmployee}
      />
    </div>
  )
}

export default App;