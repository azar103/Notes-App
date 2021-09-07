import {applyMiddleware, compose, createStore} from 'redux';
import reduxThunk from 'redux-thunk';
import {persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import noteReducer from './reducers/noteReducer';
import persistStore from 'redux-persist/lib/persistStore';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
let persistedReducer = persistCombineReducers(persistConfig, {
  note: noteReducer,
});

export default () => {
  let store = createStore(
    persistedReducer,
    compose(applyMiddleware(reduxThunk)),
  );
  let persistor = persistStore(store);
  return {store, persistor};
};
