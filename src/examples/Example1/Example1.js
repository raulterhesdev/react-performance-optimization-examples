import React from 'react';

const List = () => {
	const listItems = [];
	for (let i = 0; i <= 2000; i++) {
		listItems.push(
			<li
				key={i}
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
	return (
		<div>
			<input value={text} onChange={(e) => setText(e.target.value)} />
			<div style={{ display: 'flex' }}>
				<List />
			</div>
		</div>
	);
};

export default Example1;
