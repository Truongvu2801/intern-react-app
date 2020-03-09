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
        // main: (props) => <ListItems {...props}/>
    },
    {
        path: '/post',
        exact: false,
        component: ItemDetail,
        // main: (props) => <ItemDetail {...props}/>
    }

]

export default routes;