const fbnums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 45, 62, 81];

let multipleFinder = num => {

    if (multipleOf3(num) === 0) {

        if (multipleOf5(num) === 0) {
            console.log(num + 'fizzbuzz');
        } else {

            console.log(num + 'fizz');
        }

    } else if (multipleOf5(num) === 0) {

        console.log(num + 'buzz');

    } else {
        console.log(num);
    }

}

let multipleOf3 = num => num % 3;
let multipleOf5 = num => num % 5;
//let multipleOf15 = num => num % 15;


for (i = 0; i < fbnums.length; i++) {

    multipleFinder(fbnums[i]);

}


