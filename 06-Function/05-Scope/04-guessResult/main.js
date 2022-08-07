let x = 1;
function func() {
  console.log(x); // 1
  let x = 2; // error as cannot anounse x twice
}
func(); 