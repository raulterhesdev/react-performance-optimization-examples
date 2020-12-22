import React from 'react';
import { nanoid } from 'nanoid';

const randomArray = Array.from({ length: 5000 }, () => ({
	id: nanoid(),
	color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
		Math.random() * 255
	)}, ${Math.floor(Math.random() * 255)})`,
}));

const ListItem = React.memo(({ color, id, elKey, onClick }) => {
	return (
		<li
			style={{
				backgroundColor: color,
				width: 200,
				height: 200,
				cursor: 'pointer',
				margin: 4,
			}}
			onClick={() => onClick(id)}
		>
			{elKey}
		</li>
	);
});

const List = () => {
	const [list, setList] = React.useState(randomArray);

	const removeItem = React.useCallback(
		(id) => {
			setList((currentList) => currentList.filter((el) => el.id !== id));
		},
		[setList]
	);

	const listItems = list.map((el, index) => {
		const elKey = Math.random();
		// const elKey = index;
		// const elKey = el.id;
		return (
			<ListItem
				color={el.color}
				id={el.id}
				elKey={elKey}
				key={elKey}
				onClick={removeItem}
			/>
		);
	});
	return (
		<div>
			<h1>Number of items: {list.length}</h1>
			<ul style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
				{listItems}
			</ul>
		</div>
	);
};

const Example4 = () => {
	const [text, setText] = React.useState('');

	React.useEffect(() => {
		document.title = 'Example 4';
	}, []);

	return (
		<div>
			<input value={text} onChange={(e) => setText(e.target.value)} />
			<div style={{ display: 'flex' }}>
				<List />
			</div>
		</div>
	);
};

export default Example4;
