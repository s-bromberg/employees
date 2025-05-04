import './stylesheets/BonusTable.css';
// import employeesData from './employees/employeesData';

export default function BonusTable({ employees, setSelectedEmployee }) {
  // const employees =
  //   localStorage.employees ? JSON.parse(localStorage.employees) : employeesData;

  // console.log(employees);

  const tableData = employees.map(e =>
    <tr
      className='table-row'
      key={e.last}
      onClick={() => setSelectedEmployee(e)}
    >
      <th>{e.last}</th>
      <th>${(e.salary * e.bonus).toFixed(2)}</th>
    </tr>
  );

  return (
    <table>
      <thead>
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
