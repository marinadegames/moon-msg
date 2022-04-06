// import React from 'react'

export interface IRoute {
    path: string
    component: JSX.Element
}

export enum RouteNames {
    HOME = '/',
    LOGIN = '/login',
    NOT_FOUND = '/*',
    MESSAGES = '/messages',
    PROFILE = '/profile/:userId',
    ME = '/me',
    FRIENDS = '/friends',
    MUSIC = '/music',
    SETTINGS = '/settings',
}

export const routes: IRoute[] = [
    // {
    //     path: RouteNames.HOME,
    //     component: <Navigate to={RouteNames.HOME} />,
    // },
    // {
    //     path: RouteNames.HOME,
    //     component: <Navigate to={RouteNames.PROFILE} />,
    // },

    //require auth below
    // {
    //     path: RouteNames.PROFILE,
    //     component: (
    //         <RequireAuth>
    //             <profile />
    //         </RequireAuth>
    //     ),
    // },
]
