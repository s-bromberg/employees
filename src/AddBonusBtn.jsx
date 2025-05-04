
export default function AddBonusBtn({ employees, setEmployees }) {
  const clickHandler = () => {
    const updatedEmployees = employees.map(e => {
      return {
        ...e, bonus: Number((e.bonus + .05).toFixed(2))
      }
    });

    setEmployees(updatedEmployees);

    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  }

  return (
    <button onClick={clickHandler} >Add To Bonus</button>
  )
}
