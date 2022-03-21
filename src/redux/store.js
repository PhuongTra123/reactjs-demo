// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from './reducer'

// const composeEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composeEnhancers);

import { configureStore } from '@reduxjs/toolkit'
import filtersSlice from '../components/Filters/filtersSlice';
import todosSlice from '../components/TodoList/todosSlice';

const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        todoList: todosSlice.reducer
    }
})

export default store;