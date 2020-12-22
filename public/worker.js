const fibonacci = (n) => (n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2));

onmessage = (e) => {
	const { input } = e.data;
	const startTime = new Date().getTime();
	const number = fibonacci(input);
	postMessage({
		number,
		time: new Date().getTime() - startTime,
	});
};
