import React from 'react';

const Counter = React.memo(({ params }) => {
	const [value, setValue] = React.useState(0);

	const increment = () => {
		setValue((prev) => prev + params.inc);
	};
	const decrement = () => {
		setValue((prev) => prev - params.inc);
	};

	return (
		<div>
			<p>Counter Value: {value}</p>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	);
});

const Example3 = () => {
	const [inc, setInc] = React.useState(2);
	const [name, setName] = React.useState('');

	const params = React.useMemo(() => {
		return { inc };
	}, [inc]);

	React.useEffect(() => {
		document.title = 'Example 3';
	}, []);

	return (
		<div>
			<label htmlFor='name'>Your Name:</label>
			<input
				name='name'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<label htmlFor='incrementValue'>Increment Value:</label>
			<input
				name='incrementValue'
				value={inc}
				onChange={(e) => setInc(+e.target.value)}
			/>
			<Counter params={params} />
		</div>
	);
};

export default Example3;
