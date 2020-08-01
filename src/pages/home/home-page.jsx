import React from 'react';

import { withReducer } from '@store/reducerLoader';
import HomeFunctional from './components/home-functional';
import reducer from './reducer';
import sagas from './sagas';
import './home.scss';

const Home = () => {
	return <HomeFunctional />;
};

const ReducedScreen = withReducer('todo', reducer, sagas)(Home);
export default ReducedScreen;
