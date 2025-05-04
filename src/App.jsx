import './stylesheets/App.css';
import AddBonusBtn from './AddBonusBtn';
import BonusTable from './BonusTable';
import employeesData from './employees/employeesData';
import { useState } from 'react';
import EmployeeCard from './EmployeeCard';

function App() {
  const employee =
    localStorage.employees ? JSON.parse(localStorage.employees) : employeesData;

  console.log(employee)

  const employeeBonuses = employee.map(e => {
    return {
      lastName: e.last,
      bonus: e.bonus
    }
  });

  const [employees, setEmployees] = useState(employee);
  const [bonuses, setBonuses] = useState(employeeBonuses)
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  console.log('bonuses', bonuses);

  return (
    <>
      <BonusTable
        bonuses={bonuses}
        employees={employees}
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
    </>
  )
}

export default App;