import React from 'react';
import App  from "../page/App/App";
import ListItems from '../page/ListItems/ListItems';
import ItemDetail from '../page/ItemDetail/ItemDetail';

const routes = [
    {
        path: '/',
        exact: true,
        component: App
    },
    {
        path: '/posts/:keyword',
        exact: false,
        component: ListItems
    },
    {
        path: '/posts/detail/:id',
        exact: false,
        component: ItemDetail
    }

]

export default routes;