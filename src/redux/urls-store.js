import { createStore } from 'redux';
import { urlsReducer } from './urls-reducer';

export const store = createStore(urlsReducer)