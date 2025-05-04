import Employee from "./Employee";

export default class Supervisor extends Employee {
  constructor(first, last, prefix, team, title, salary) {
    super(first, last, prefix, team, title, salary);
    this.title = 'Supervisor';
    this.bonus = .1
  }
}