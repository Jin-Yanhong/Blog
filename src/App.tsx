import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import { NavBar, TopPicture } from './components';
import Home from './views/Home';
import Works from './views/Works';
import Article from './views/Article';
function App() {
	return (
		<div className='App'>
			<NavBar className='NavBar' />
			<TopPicture />
			<Routes>
				<Route element={<Home />} path='/' />
				<Route element={<Works />} path='/Works' />
				<Route element={<Article />} path='/Article' />
			</Routes>
		</div>
	);
}

export default App;
