import Employee from './Employee';

export default class Manager extends Employee {
  constructor(first, last, prefix, team,  salary) {
    super(first, last, prefix, team, salary);
    this.title = 'Manager';
    this.bonus = .08
  }
}