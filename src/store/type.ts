import { store } from './index';

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type RootState = ReturnType<typeof store.getState>;

//
export interface typeSysConfig {
    id: string;
    copyright: string;
    contactInfo: { address: string; phone: string; email: string };
    lanLong: number[];
}
