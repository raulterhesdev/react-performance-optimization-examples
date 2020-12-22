import React from 'react';

const List = () => {
	const listItems = [];
	for (let i = 0; i <= 2000; i++) {
		listItems.push(
			<li
				key={i}
				// Set a random bg-color everytime a list item renders
				style={{
					backgroundColor: `rgb(${Math.floor(
						Math.random() * 255
					)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
						Math.random() * 255
					)})`,
				}}
			>
				List item: {i}
			</li>
		);
	}
	return (
		<div>
			<ul>{listItems}</ul>
		</div>
	);
};

const Example1 = () => {
	const [text, setText] = React.useState('');

	React.useEffect(() => {
		document.title = 'Example 1';
	}, []);

	return (
		<div>
			<input value={text} onChange={(e) => setText(e.target.value)} />
			<div className='lists-container'>
				<List />
				<List />
				<List />
				<List />
			</div>
		</div>
	);
};

export default Example1;
