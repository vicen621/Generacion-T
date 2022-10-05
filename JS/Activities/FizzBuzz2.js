function fizzBuzz2(fizz, buzz, fizzNum, buzzNum, maxNum) {
    for (i = 1; i < maxNum + 1; i++) {
        let str = "";

        if (i % fizzNum === 0)
            str += fizz;

        if (i % buzzNum === 0)
            str += buzz;

        console.log(str === "" ? i : str);
    }
}

fizzBuzz2("Vicente", "Viloni", 5, 7, 100);