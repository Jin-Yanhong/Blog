import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { typeSysConfig } from './type';

export interface sysConfigState {
	sysConfig: typeSysConfig;
}

const initialState: sysConfigState = {
	sysConfig: {
		id: '',
		copyright: '',
		contactInfo: { address: '', phone: '', email: '' },
		lanLong: [],
	},
};

export const configSlice = createSlice({
	name: 'sysConfig',
	initialState,
	reducers: {
		setSystemConfig: (state, action: PayloadAction<sysConfigState>) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.sysConfig = action.payload.sysConfig;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setSystemConfig } = configSlice.actions;

export default configSlice.reducer;
