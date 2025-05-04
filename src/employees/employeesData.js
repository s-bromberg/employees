import Employee from './Employee';
import Executive from './Executive';
import Manager from './Manager';
import Supervisor from './Supervisor';

export default [
  new Executive('Moshe', 'Roth', 'Mr', null, 250000),
  new Supervisor('Chaim', 'Stark', 'Mr', 'Store', 150000),
  new Supervisor('Moshe', 'Spira', 'Mr', 'Warehouse', 160000),
  new Manager('Yehuda', 'Gold', 'Mr', 'Applications', 120000),
  new Manager('Miriam', 'Weiss', 'Mrs', 'Website', 120000),
  new Employee('Shlomo', 'Green', 'Mr', 'Website', 65000),
  new Employee('Esther', 'Silver', 'Mrs', 'Website', 75000),
  new Employee('Yakov', 'Weiser', 'Mr', 'Applications', 70000),
]