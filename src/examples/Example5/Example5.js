import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Example5 = () => {
	const items = [];

	React.useEffect(() => {
		document.title = 'Example 5';
	}, []);

	for (let i = 1; i <= 100; i++) {
		items.push(
			<img
				key={i.toString()}
				src={`https://placedog.net/600/400/id=${i}`}
				alt=''
				// threshold={200}
				// visibleByDefault={false}
				height={400}
				width={600}
			></img>
		);
	}
	return <div>{items}</div>;
};

export default Example5;
