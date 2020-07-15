let generatePowerSet = (arr) => {
  let result = [];
  result.push([]);

  arr.forEach((a) => {
    //array length
    let length = result.length;
    let i = 0;

    while (i < length) {
      let temp = result[i].slice(0);
      temp.push(a);

      result.push(temp);
      i++;
    }
  });

  return result;
};

export default generatePowerSet;
