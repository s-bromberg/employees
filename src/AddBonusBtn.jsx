import { useState } from "react";

export default function AddBonusBtn({ employees, setEmployees }) {
  const [bonusAdded, setBonusAdded] = useState(false);

  const clickHandler = () => {
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
    <button onClick={clickHandler} disabled={bonusAdded} >
      👏 Add 5% Bonus 👏
    </button>
  )
}
