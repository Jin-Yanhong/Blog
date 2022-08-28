import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { NavBar, TopPicture, Footer, BlockTitle } from './components';
import Home from './views/Home';
import Works from './views/Works';
import Article from './views/Article';
import { setSystemConfig } from './store/SysConfigMethods';
import { getSystemConfig } from './api/home';
import { setStorage, getStorage } from './utils';

import './App.scss';

interface ConfigType {
	contactInfo?: object;
	copyright?: string;
	id?: string;
}

const App: React.FunctionComponent<{}> = function () {
	let [config, setConfig] = useState<ConfigType>({});
	const dispatch = useDispatch();
	const pathname = useLocation().pathname;
	let configObj: any = getStorage('config') || undefined;

	useEffect(() => {
		if (config?.copyright) {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'auto',
			});
		} else {
			if (configObj) {
				setConfig(configObj);
				dispatch(setSystemConfig({ sysConfig: configObj }));
			} else {
				getSystemConfig()
					.then(res => {
						setConfig(res);
						setStorage('config', res);
						dispatch(setSystemConfig({ sysConfig: res }));
					})
					.catch(err => {});
			}
		}
		// return () => window.localStorage.clear();
	}, [pathname]);

	return (
		<div className='App'>
			<NavBar className='NavBar' />
			<div
				style={{
					display: pathname == '/' ? 'block' : 'none',
				}}
			>
				<div className='topContainer'>
					<div className='BannerImg'>
						<TopPicture />
					</div>
					<div className='title'>
						<BlockTitle title='Hello World' lineColor='#fff'></BlockTitle>
					</div>
				</div>
			</div>
			<Routes>
				<Route element={<Home />} path='/' />
				<Route element={<Works />} path='/Works' />
				<Route element={<Article />} path='/Article' />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
			<Footer copyright={config?.copyright} />
		</div>
	);
};

export default App;
