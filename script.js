function fibonacci(num) {
// your code here
	let a = 0;
	let b = 1;
	let c = a+b;
	if(num===1){
		return a
	}
	for (let index = 2; index < num-1; index++) {
		a=b;
		b=c;
		c = a+b;
	}
	return c;
}

module.exports = fibonacci;
