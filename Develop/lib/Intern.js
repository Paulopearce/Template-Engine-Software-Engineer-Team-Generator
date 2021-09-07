const Employee = require('./Employee.js')

class Intern extends Employee {
  constructor (name, email, id, school) {
    super(name, email, id)
    this.school = school
  }

  getName () {
    return this.name
  }

  getEmail () {
    return this.email
  }

  getId () {
    return this.id
  }

  getSchool () {
    return this.school
  }

  getRole () {
    return 'Intern'
  }
}

module.exports = Intern