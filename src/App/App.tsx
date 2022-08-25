import './App.scss';
import '../static/css/reset.css';
import { Routes, Route } from 'react-router-dom';
import Nav from '../components/Nav';
import Menu from '../components/Menu';
import ArticlePage from '../pages/article';
import ThreejsPage from '../pages/threejs';
import OpenLayersPage from '../pages/openLayers';
// 引用antd
import 'antd/dist/antd.css';

function App() {
	// return (
	// 	<div className='App'>
	// 		<Nav />
	// 		<Menu />
	// 		<Routes>
	// 			<Route element={<ArticlePage />} path='/' />
	// 			<Route element={<ThreejsPage />} path='/threejs' />
	// 			<Route element={<OpenLayersPage />} path='/openLayers' />
	// 		</Routes>
	// 	</div>
	// );

	return (
		<div className='container'>
			<div style={{ background: '#686de0' }}>1</div>
			<div style={{ background: '#7ed6df' }}>2</div>
			<div style={{ background: '#f0932b' }}>3</div>
		</div>
	);
}

export default App;
