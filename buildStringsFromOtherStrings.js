/*
    Input a is a string of space separated words
    Input b is a string of space separated words

    Given a and b, detect if b can be made up of the words contained in a. Duplicate values are counted as different words. 
*/

function isNegative(element) {
    return element < 0
}

function calVariationBetweenStrings(b, a) {
    let res = {}
    a.forEach(word => { res[word] = (res[word] || 0 ) + 1 })
    b.forEach(word => { res[word] = ( res[word] || 0 ) - 1 })
    return res;
}

function main(a, b) {
    let variation = calVariationBetweenStrings(b, a);
    
    let res = true
    //check for negative values in the variation, signifying values in the ransom that arnt in the magazine
    Object.keys(variation).forEach(key => {
        if( variation[key] < 0 ) { res = false }
    })
    return res
}