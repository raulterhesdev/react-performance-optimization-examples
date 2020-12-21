import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Example1 from './examples/Example1/Example1';
import Example2 from './examples/Example2/Example2';
import Example3 from './examples/Example3/Example3';
import Example4 from './examples/Example4/Example4';
import Example5 from './examples/Example5/Example5';
import Example6 from './examples/Example6/Example6';
import DummyCode from './examples/Example6/DummyCode/App';

const Navigation = () => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<Link to='/example1'>Example 1</Link>
			<Link to='/example2'>Example 2</Link>
			<Link to='/example3'>Example 3</Link>
			<Link to='/example4'>Example 4</Link>
			<Link to='/example5'>Example 5</Link>
			<Link to='/example6'>Example 6</Link>
		</div>
	);
};

function App() {
	return (
		<div className='App'>
			<Link to='/'>Go back</Link>
			<Switch>
				<Route path='/example1' component={Example1} />
				<Route path='/example2' component={Example2} />
				<Route path='/example3' component={Example3} />
				<Route path='/example4' component={Example4} />
				<Route path='/example5' component={Example5} />
				<Route path='/example6' component={Example6} exact />

				<Route path='/example6/dummy' component={DummyCode} />

				<Route path='/' component={Navigation} exact />
				<Redirect to='/' />
			</Switch>
		</div>
	);
}

export default App;
