import { useState } from 'react';
import './stylesheets/BonusTable.css';

export default function BonusTable({ employees, setSelectedEmployee, setEmployees }) {
  const [nameSortedAsc, setNameSortedAsc] = useState(false);
  const [bonusSortedAsc, setBonusSortedAsc] = useState(false);

  const handleSort = compareFn => {
    const employeesSorted = [...employees].sort(compareFn);
    setEmployees(employeesSorted);
    localStorage.setItem('employees', JSON.stringify(employeesSorted));
  }

  const handleNameSort = () => {
    setNameSortedAsc(!nameSortedAsc);

    if (!nameSortedAsc) {
      return handleSort((a, b) => a.last.localeCompare(b.last));
    } else {
      return handleSort((a, b) => b.last.localeCompare(a.last));
    }
  };

  const handleBonusSort = () => {
    setBonusSortedAsc(!bonusSortedAsc);

    if (!bonusSortedAsc) {
      return handleSort((a, b) => a.bonus - b.bonus);
    } else {
      return handleSort((a, b) => b.bonus - a.bonus);
    }
  };

  const tableData = employees.map(e =>
    <tr key={e.last}>
      <td
        className='clickable'
        onClick={() => setSelectedEmployee(e)}
      >
        {e.last}
      </td>
      <td className='bonus'>
        <span>$</span>
        <span>
          {Number((e.salary * e.bonus)).toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </span>
      </td>
    </tr>
  );

  return (
    <table>
      <thead>
        <tr>
          <th>
            Employee
          </th>
          <th>
            Bonus
          </th>
        </tr>
      </thead>
      <tbody>
        {tableData}
      </tbody>
      <tfoot>
        <tr >
          <td><button onClick={handleNameSort}>Sort by Name</button></td>
          <td><button onClick={handleBonusSort}>Sort by Bonus </button></td>
        </tr>
      </tfoot>
    </table>
  );
}