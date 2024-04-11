import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './reducers/authUserReducer';
import isPreloadReducer from './reducers/isPreloadReducer';

const store = configureStore({
  reducer: {
    loadingBar: loadingBarReducer,
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
  },
});

export default store;
