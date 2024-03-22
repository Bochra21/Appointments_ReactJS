import { createStore } from 'redux';
import reducer from './reducer';

// ==============================|| REDUX - MAIN STORE ||============================== //

const store = createStore(reducer);
store.subscribe(() => console.log("---------- Store update, ", store.getState()));
// // Check if the store is created
// if (store !== undefined) {
//     console.log("--------Store created successfully!");
// } else {
//     console.log("--------------Failed to create store!");
// }

const persister = 'Free';

export { store, persister };
