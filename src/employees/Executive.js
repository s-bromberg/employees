import Employee from "./Employee";

export default class Executive extends Employee {
  constructor(first, last, prefix, team, title, salary) {
    super(first, last, prefix, team, title, salary);
    this.title = 'Executive';
    this.bonus = .2;
  }
}