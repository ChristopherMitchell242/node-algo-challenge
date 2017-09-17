/*
	Given two strings,a and b, that may or may not be of the same length, 
	determine the minimum number of character deletions required to make  and  anagrams. 
	Any characters can be deleted from either of the strings.
*/

let freq = {};

function calcVariationBetweenStrings(a, b) {
    let freq = {};
    a.split('').forEach((character) => {freq[character] = (freq[character] || 0) + 1});
    b.split('').forEach((character) => {freq[character] = (freq[character] || 0) - 1});
    return freq;
}

function main() {
    var a = readLine();
    var b = readLine();
    let diff = calcVariationBetweenStrings(a, b);
    return Object.keys(diff)
                .map(  (key) => { return Math.abs(diff[key]) }  )
                .reduce((a, c) => {return a + c});
}