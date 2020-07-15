let topKElement = (strArr, k) => {
    strArr = strArr.split('');
    let keyFreq = {}; // will store letters' frequency
    strArr.forEach(strArr => {

        if (!keyFreq[strArr]) {
            keyFreq[strArr] = 1;
        } else {
            keyFreq[strArr]++;
        }
    });

    let freqKey = {}; // will store letter of respective frequency
    for (let key in keyFreq) {
        let freq = keyFreq[key];
        if (!freqKey[freq]) {
            freqKey[freq] = [];
        }
        freqKey[freq].push(key);
    }

    let sortedFreqs = Object.keys(freqKey).sort((a, b) => b - a); // sorting the frequencies to descending order

    let res = [];

    for (let i = 0, resK = 0; i < sortedFreqs.length; i++) {
        let freq = sortedFreqs[i];
        let keys = freqKey[freq];
        keys.sort();
        for (var j = 0; j < keys.length && resK < k; j++) {
            res.push(keys[j]);
            resK++;
        }
    }
    //res.sort();
    console.log(res);
    return res;
};

export default topKElement;