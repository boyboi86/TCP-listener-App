/* 
Source file: helloworld.js

---
Copyright (c) 2012 All Right Reserved, C. A. Cois
http://www.codehenge.net

THIS CODE AND INFORMATION ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY 
KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
PARTICULAR PURPOSE.

Node.js is an official trademark of Joyent. This software is not 
formally related to or endorsed by the official Joyent Node.js open 
source or commercial project.
*/

var rl = require('readline');

console.log("Hello World!");

var interface = rl.createInterface(process.stdin, process.stdout, null);

interface.question('What’s your name?', function(answer) {
	console.log('Hello, ' + answer + "!");
	interface.close();
	process.stdin.destroy();
	 });