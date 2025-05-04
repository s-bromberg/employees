import './stylesheets/EmployeeCard.css'

export default function EmployeeCard({ employee, employees, setSelectedEmployee }) {
  if (!employee) return null;

  const { first, last, prefix, team, salary, title } = employee;
  let manager;

  if (title === 'Employee') {
    manager = employees.find(e => e.title === 'Manager' && e.team === team);
  }

  return (
    <div id='card'>
      <h2>{prefix}. {first} {last}</h2>
      <ul>
        {team && <li>Team: {team}</li>}
        <li>Position: {title}</li>
        <li>Salary: ${salary.toFixed(2)}</li>
        {manager &&
          <li>
            Manager: {manager.prefix}. {manager.first} {manager.last}
          </li>}
      </ul>
      <button onClick={() => setSelectedEmployee(null)}>close</button>
    </div>
  )
}
