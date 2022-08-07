function magic() {
    return function (x) {
      return x * 42;
    };
  }
  const answer = magic();
  console.log(answer); // function (x) {return x * 42; };
  console.log(answer(1337)); // 1337 * 42
  console.log(magic(1337)(42)); // 42 * 42 1337 dont not used in calculation as maggic() does not required any input parameter.