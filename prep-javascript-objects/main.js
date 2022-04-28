var person = {
  firstName: 'Axl Jon',
  lastName: 'Dela Cruz',
  hobby: 'Reading Books'
};
console.log(person);

var fullName = "My husband's name is " + person.firstName + ' ' + person.lastName + '.';
console.log(fullName);

person.job = 'Software Engineer';
console.log('My husband works as a ' + person.job + '.');

person.previousJob = 'H&R Block Tax Person';
console.log('He previously worked as a ' + person.previousJob + '.');

console.log(person);
