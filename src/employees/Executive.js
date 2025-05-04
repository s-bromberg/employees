import Employee from './Employee';

export default class Executive extends Employee {
  constructor(first, last, prefix, team,  salary) {
    super(first, last, prefix, team, salary);
    this.title = 'Executive';
    this.bonus = .2;
  }
}