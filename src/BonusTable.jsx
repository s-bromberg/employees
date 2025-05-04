import { useState } from 'react';
import './stylesheets/BonusTable.css';

export default function BonusTable({ employees, setSelectedEmployee, setEmployees }) {
  const [nameSortedAsc, setNameSortedAsc] = useState(false);
  const [bonusSortedAsc, setBonusSortedAsc] = useState(false);

  const tableData = employees.map(e =>
    <tr
      className='clickable'
      key={e.last}
      onClick={() => setSelectedEmployee(e)}
    >
      <th>{e.last}</th>
      <th>${(e.salary * e.bonus).toFixed(2)}</th>
    </tr>
  );

  const handleSort = sortFunc => setEmployees([...employees].sort(sortFunc));

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

  return (
    <table>
      <thead>
        <tr>
          <th
            className='clickable'
            onClick={handleNameSort}
          >
            Sort
          </th>
          <th
            className='clickable'
            onClick={handleBonusSort}
          >
            Sort
          </th>
        </tr>
        <tr>
          <th>Employee</th>
          <th>Bonus</th>
        </tr>
      </thead>
      <tbody>
        {tableData}
      </tbody>
    </table>
  );
}
