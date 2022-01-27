import { createStore, compose } from 'redux';
import reducers from './reducers';


export function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        reducers,
        initialState,
    );
    return store;
}
