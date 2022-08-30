import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { getSystemConfig } from './api/home';
import { BackToTop, Footer, NavBar } from './components';
import { setSystemConfig } from './store/SysConfigMethods';
import { getStorage, setStorage } from './utils';
import Article from './views/Article';
import Home from './views/Home';
import Works from './views/Works';

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
	let copyright: string = config?.copyright || '';
	useEffect(() => {
		if (copyright) {
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
					.then((res) => {
						setConfig(res);
						setStorage('config', res);
						dispatch(setSystemConfig({ sysConfig: res }));
					})
					.catch((err) => {});
			}
		}
		return () => {
			// window.localStorage.clear();
		};
	}, [pathname, configObj]);

	return (
		<div className="App">
			<NavBar className="NavBar" />
			<Routes>
				<Route element={<Home />} path="/" />
				<Route element={<Works />} path="/Works" />
				<Route element={<Article />} path="/Article" />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
			<Footer copyright={copyright} />
			<BackToTop />
		</div>
	);
};

export default App;
