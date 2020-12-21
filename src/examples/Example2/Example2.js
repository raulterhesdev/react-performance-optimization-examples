import React from 'react';

const Counter = React.memo(({ checkTargetReached }) => {
	const [value, setValue] = React.useState(0);

	const increment = () => {
		setValue((prev) => prev + 1);
	};
	const decrement = () => {
		setValue((prev) => prev - 1);
	};

	React.useEffect(() => {
		checkTargetReached(value);
	}, [checkTargetReached, value]);

	return (
		<div>
			<p>Counter Value: {value}</p>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	);
});

const Example2 = () => {
	const [target, setTarget] = React.useState(2);
	const [name, setName] = React.useState('');

	const checkTargetReached = React.useCallback(
		(current) => {
			if (current === target) {
				alert('Target reached');
			}
		},
		[target]
	);

	return (
		<div>
			<label htmlFor='name'>Your Name:</label>
			<input
				name='name'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<label htmlFor='target'>Target Value:</label>
			<input
				name='target'
				value={target}
				onChange={(e) => setTarget(e.target.value)}
			/>
			<Counter checkTargetReached={checkTargetReached} />
		</div>
	);
};

export default Example2;
