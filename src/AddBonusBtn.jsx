import { useState } from 'react';

export default function AddBonusBtn({ employees, setEmployees }) {
  const employeeBonus = employees.find(e => e.title === 'Employee').bonus;
  const [bonusAdded, setBonusAdded] = useState(
    employeeBonus > .05 ? true : false
  );

  const handleClick = () => {
    if (bonusAdded) return;

    const updatedEmployees = employees.map(e => {
      return {
        ...e, bonus: Number((e.bonus + .05).toFixed(2))
      }
    });

    setEmployees(updatedEmployees);
    setBonusAdded(true);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  }

  return (
    <button
      onClick={handleClick}
      disabled={bonusAdded}
      style={{
        backgroundColor: 'lightblue',
        borderRadius: '.3em',
        marginTop: '.3em'
      }}
    >
      👏 Add 5% Bonus 👏
    </button>
  );
}
