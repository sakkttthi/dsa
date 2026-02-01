frequencySort('cccaaa')

function frequencySort(a) {
    let feq = new Array(128).fill(0);

    for (let i = 0; i < a.length; i++) {
        let code = a.charCodeAt(i);
        feq[code]++;
    }
    // console.log(JSON.stringify(feq));

    let charfeq = [];
    for (let i = 0; i < 128; i++) {
        if (feq[i] > 0) {
            charfeq.push([String.fromCharCode(i), feq[i]]);
        }
    }
    // console.log(JSON.stringify(charfeq));

    charfeq.sort((a, b) => b[1] - a[1]);

    // console.log(JSON.stringify(charfeq));

    let result = "";

    for (let i = 0; i < charfeq.length; i++) {
        let data = charfeq[i];
        let letter = data[0];
        let repeatCount = data[1];

        for (let j = 0; j < repeatCount; j++) {
            result += letter;
        }

    }
    console.log(result);
    return result;
}

