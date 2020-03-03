import React from 'react';
import { App } from "../page/App/App";
import ListItems from '../page/ListItems/ListItems';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <App/>
    },
    {
        path: '/listItems',
        exact: false,
        main: () => <ListItems/>
    },

]

export default routes;