// function sayHi(age) {
//     if (age < 12) alert('Hi kid');
//   }
//   console.log(sayHi); //  Nothing will be log sayHi alone is not a function
//   console.log(sayHi(10)); // Alert `Hi kid` and Undefined in the console log

  function sayHi(name) {
    if (name) {
      alert('Hi ' + name);
      return;
    } else {
      return 'Who are you';
    }
  }
//   console.log(sayHi('John')); // Alert `Hi John` but Undefined in console log
  console.log(sayHi()); // Console log `who are you`