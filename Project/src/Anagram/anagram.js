let anagramChecker = (str1, str2) => {
  str1 = str1.toLowerCase().split("").sort().join("");
  str2 = str2.toLowerCase().split("").sort().join("");
  return str1 === str2;
};

export default anagramChecker;
