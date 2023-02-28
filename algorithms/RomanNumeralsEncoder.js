const romNumEn = (num) => {
    let resultToStrAndArr = num.toString().split("")
    let numLength = resultToStrAndArr.length
    let finalResult = [];
    for (let i = 0; i < numLength; i++) {
        // if()

        finalResult.push(resultToStrAndArr[i])
    }
    return finalResult
}

console.log(romNumEn(55));


function convertToRoman(num) {
    var roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    var str = '';

    for (var i of Object.keys(roman)) {
        var q = Math.floor(num / roman[i]);
        num -= q * roman[i];
        str += i.repeat(q);
    }

    return str;
}

// console.log(convertToRoman(4))

function romanize(num) {
    let romanObj = {
        M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
    }
    let romanResult = ''
    let i;
    for (i in romanObj) {
        while (num >= romanObj[i]) {
            romanResult += i;
            num -= romanObj[i];
        }
    }
    return romanResult;
}

console.log(romanize(55))