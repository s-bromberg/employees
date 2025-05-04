export default class Employee {
  constructor(first, last, prefix, team, salary) {
    this.first = first;
    this.last = last;
    this.prefix = prefix;
    this.team = team;
    this.salary = salary;
    this.title = 'Employee';
    this.bonus = .05;
  }
}