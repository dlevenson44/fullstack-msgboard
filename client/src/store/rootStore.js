import { createStore } from 'easy-peasy';
import channels from './channelsStore';

const store = createStore({ channels });

export default store;