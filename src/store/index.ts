import { configureStore } from '@reduxjs/toolkit';
import sysConfigReducer from './SysConfigMethods';

const store = configureStore({
	reducer: {
		sysConfig: sysConfigReducer,
	},
});

export { store };
