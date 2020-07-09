let stringToChar = str => {
    str = str.toLowerCase().split('').sort().join('');
    //console.log(str);
    return str;
}

let anagramChecker = (str1, str2) => {
    str1 = stringToChar(str1);
    str2 = stringToChar(str2);
    return str1 === str2;
}

console.log(anagramChecker('natu', 'tanu'));
