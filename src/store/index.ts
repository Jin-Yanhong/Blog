import { configureStore } from '@reduxjs/toolkit';
import sysConfigReducer from './reducer/SysConfigReducer';

const store = configureStore({
    reducer: {
        sysConfig: sysConfigReducer,
    },
});

export { store };
