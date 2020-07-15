let multipleFinder = (num) => {
  let fbArr = [];
  const f = "fizz";
  const b = "buzz";
  const fb = "fizzbuzz";

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        fbArr.push(fb);
        console.log(i + "fizzbuzz");
      } else {
        fbArr.push(f);
        console.log(i + "fizz");
      }
    } else if (i % 5 === 0) {
      fbArr.push(b);
      console.log(i + "buzz");
    } else {
      fbArr.push(i);
      console.log(i);
    }
  }
  return fbArr;
};
export default multipleFinder;
//console.log(multipleFinder(10));
