import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Nav } from './components';
import Home from './views/Home';
import Works from './views/Works';
import Article from './views/Article';

function App() {
	return (
		<div className='App'>
			<Nav />
			<Routes>
				<Route element={<Home />} path='/' />
				<Route element={<Works />} path='/Works' />
				<Route element={<Article />} path='/Article' />
			</Routes>
		</div>
	);
}

export default App;
