import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getSystemConfig } from './api/home';
import { BackToTop, Footer, NavBar } from './components';
import { setSystemConfig } from './store/reducer/SysConfigReducer';
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

const App: React.FunctionComponent = function () {
    const [config, setConfig] = useState<ConfigType>({});
    const copyright: string = config?.copyright || '';
    const dispatch = useDispatch();

    useEffect(() => {
        const configObj: any = getStorage('config');

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
                getSystemConfig({
                    isActive: true,
                })
                    .then(res => {
                        const data = res[0];
                        setConfig(data);
                        setStorage('config', data);
                        dispatch(setSystemConfig({ sysConfig: data }));
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        }
        return () => {
            // window.localStorage.clear();
        };
    }, [copyright, dispatch]);

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

