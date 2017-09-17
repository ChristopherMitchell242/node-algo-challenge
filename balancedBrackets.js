/*
A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].

Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or })
of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().

A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. 
For example, {[(])} is not balanced because the contents in between { and } are not balanced. 
The pair of square brackets encloses a single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].

By this logic, we say a sequence of brackets is considered to be balanced if the following conditions are met:

It contains no unmatched brackets.
The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.
*/

let stack = [];

const brackets = {
    "{": "}",
    "[": "]",
    "(": ")"
}; 

function stackIsEmpty() {
    return stack.length === 0;
}

function isntTheLastBracketsClosingBracket(character) {
    return character !== stack[stack.length-1];
}

function pushBracketToListOfUnclosedBrackets(character) {
    stack.push(brackets[character])
}

function isClosingBracket(character) {
    return brackets[character] !== undefined
}

function removeLastCharacterFromStack(character) {
	stack.pop();
}

function checkBalance(string) {
    let chars = string.split('');
    
    chars.forEach((char) => {
        if (isClosingBracket(char)) { 
            pushBracketToListOfUnclosedBrackets(char)    
        } else {
            if (stackIsEmpty() || isntTheLastBracketsClosingBracket(char) ) { 
                return;
            }
            removeLastCharacterFromStack()
        }
    })
    return stack.length === 0;
}
function main(expression) { 
        stack = []; // reset stack for next string
        checkBalance(expression) ? console.log('YES') : console.log('NO')
}