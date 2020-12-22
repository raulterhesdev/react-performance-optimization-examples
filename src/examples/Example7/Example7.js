import React, { useState, useEffect } from 'react';

const Example7 = () => {
	const [input, setInput] = useState(45);
	const [timer, setTimer] = useState(0);
	const [time, setTime] = useState();
	const [result, setResult] = useState();

	React.useEffect(() => {
		document.title = 'Example 7';
	}, []);

	useEffect(() => {
		setInterval(() => {
			setTimer((prev) => prev + 1);
		}, 1000);
	}, []);

	const runWorker = () => {
		const worker = new window.Worker('./worker.js');
		worker.postMessage({ input: +input });
		worker.onmessage = (e) => {
			const { time, number } = e.data;
			setTime(time);
			setResult(number);
			worker.terminate();
		};
	};

	const fibonacci = (n) => (n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2));

	const runThread = () => {
		const startTime = new Date().getTime();
		const number = fibonacci(+input);
		setTime(new Date().getTime() - startTime);
		setResult(number);
	};

	return (
		<div>
			<input onChange={(e) => setInput(e.target.value)} value={input} />
			<button onClick={runWorker}>Run Worker</button>
			<button onClick={runThread}>Run on Main Thread</button>
			<h1>Result</h1>
			{result && (
				<>
					<h2>Elapsed time: {time}ms</h2>
					<h2>
						The {input}th fibonacci number is: {result}
					</h2>
				</>
			)}
			<input />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dui
				tellus, aliquam in ipsum non, convallis venenatis lorem. Praesent et
				eros suscipit, sagittis ante ac, dignissim odio. Suspendisse potenti.
				Duis ut bibendum mauris. Aliquam aliquam mollis libero, ut pharetra sem
				consectetur ut. Phasellus ut tellus consectetur, tincidunt neque et,
				dictum sapien. Nam porta nunc velit, id rutrum ipsum maximus eget. Sed
				quis enim ut tellus aliquet imperdiet. Praesent sed sagittis justo.
				Pellentesque hendrerit, ex et congue mollis, eros urna consequat elit,
				quis consequat justo neque tristique eros. Quisque in ornare urna. Sed
				suscipit volutpat hendrerit.
			</p>
			<div>Timer: {timer}</div>
		</div>
	);
};

export default Example7;
