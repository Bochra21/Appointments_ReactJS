import { createStore } from 'redux';
import reducer from './reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// ==============================|| REDUX - MAIN STORE ||============================== //

const persistConfig = {
    key: 'root',
    storage,
  };


  const persistedReducer = persistReducer(persistConfig, reducer);
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);

store.subscribe(() => console.log("---------- Store update, ", store.getState()));
// // Check if the store is created
// if (store !== undefined) {
//     console.log("--------Store created successfully!");
// } else {
//     console.log("--------------Failed to create store!");
// }

//const persister = 'Free';

export { store, persistor };
