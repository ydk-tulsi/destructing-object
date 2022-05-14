 let cl = console.log;

 let person = {
  fname: "Tulsi",
  lname: "katre",
  email: "tulsi@gmail.com",
  contact:1264816461,
 };

 let { email, lname, contact, fname} = person;
 cl (fname, lname, email, contact);

 let person2 = {
    firstName: 'John',
    lastName: 'Doe',
    Age: 28
};

let { firstName, lastName, middleName = 'rohn', Age: age = 18 } = person2;

console.log(middleName); // ''
console.log(age); // 28

