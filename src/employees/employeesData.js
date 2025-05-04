import Employee from './Employee'
import Executive from './Executive'
import Manager from './Manager'
import Supervisor from './Supervisor'

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
/*[
  {
    first: 'Moshe',
    last: 'Roth',
    prefix: 'Mr',
    team: null,
    title: 'Executive',
    salary: 250000
  },
  {
    first: 'Chaim',
    last: 'Stark',
    prefix: 'Mr',
    team: 'Store',
    title: 'Supervisor',
    salary: 150000
  },
  {
    first: 'Moshe',
    last: 'Spira',
    prefix: 'Mr',
    team: 'Warehouse',
    title: 'Supervisor',
    salary: 160000
  },
  {
    first: 'Yehuda',
    last: 'Gold',
    prefix: 'Mr',
    team: 'Applications',
    title: 'Manager',
    salary: 120000
  },
  {
    first: 'Miriam',
    last: 'Weiss',
    prefix: 'Mrs',
    team: 'Website',
    title: 'Manager',
    salary: 120000
  },
  {
    first: 'Shlomo',
    last: 'Green',
    prefix: 'Mr',
    team: 'Website',
    title: 'Employee',
    salary: 65000
  },
  {
    first: 'Esther',
    last: 'Silver',
    prefix: 'Mrs',
    team: 'Website',
    title: 'Employee',
    salary: 75000
  },
  {
    first: 'Yakov',
    last: 'Weiser',
    prefix: 'Mr',
    team: 'Applications',
    title: 'Employee',
    salary: 70000
  }

]*/