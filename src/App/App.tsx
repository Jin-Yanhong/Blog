import './App.scss';
import '../static/css/reset.css';
import { Routes, Route } from 'react-router-dom';
import Nav from '../components/Nav';
import Home from '../pages/Home';
import Works from '../pages/Works';
import Article from '../pages/Article';

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
