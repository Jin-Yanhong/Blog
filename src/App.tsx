import { useState, useEffect } from 'react';
import { Routes, Route /* useLocation */ } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { NavBar, TopPicture, Footer } from './components';
import Home from './views/Home';
import Works from './views/Works';
import Article from './views/Article';
import { setSystemConfig } from './store/SysConfigMethods';
import { getSystemConfig } from './api/home';
import './App.scss';

const App: React.FunctionComponent<{}> = function () {
	let [config, setConfig] = useState<ConfigType>({});
	const dispatch = useDispatch();
	// const location = useLocation();
	interface ConfigType {
		contactInfo?: object;
		copyright?: string;
		id?: string;
	}

	useEffect(() => {
		getSystemConfig()
			.then(res => {
				setConfig(res);
				dispatch(setSystemConfig({ sysConfig: res }));
			})
			.catch(err => {});
	}, []);

	return (
		<div className='App'>
			<NavBar className='NavBar' />
			<TopPicture />
			<Routes>
				<Route element={<Home />} path='/' />
				<Route element={<Works />} path='/Works' />
				<Route element={<Article />} path='/Article' />
			</Routes>
			<Footer copyright={config.copyright} />
		</div>
	);
};

export default App;
