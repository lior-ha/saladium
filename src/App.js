import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './store/reducer';

import Layout from './hoc/layout/layout.component';

import Homepage from './pages/homepage/homepage.component';
import SaladBuilder from './pages/saladBuilder/saladBuilder.component';
import checkout from './pages/checkout/checkout.component';


import './App.scss';

const store = createStore(reducer);

function App() {
	return (
        <Provider store={store}>
            <HashRouter> {/* using HashRouter because of github pages */}
                <Layout>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/buildSalad" component={SaladBuilder} />
                    <Route path="/checkout" component={checkout} />
                </Layout>
            </HashRouter>
        </Provider>
	);
}

export default App;
