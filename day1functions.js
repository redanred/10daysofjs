/*
Task

Implement a function named factorial that has one parameter: an integer,
 . It must return the value of  (i.e.,  factorial).
*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}

function factorial (n) { 
	if (n === 0){ 
		return 1; 
	}
	return n * factorial (n-1); 
}

         
