function fibonacci(num) {
// your code here
	let a = 0;
	let b = 1;
	let c = a+b;
	for (let index = 0; index <= num; index++) {
		a=b;
		b=c;
		c = a+b;
	}
	return c;
}

module.exports = fibonacci;
