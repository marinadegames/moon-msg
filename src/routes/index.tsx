// import React from 'react'

export interface IRoute {
    path: string
    component: JSX.Element
}

export enum RouteNames {
    HOME = '/',
    LOGIN = '/login',
    NOT_FOUND = '/*',
    // SIGN_IN = '/sign-in',
    // SIGN_UP = '/sign-up',
    // RESET_PASSWORD = '/reset-password',
    // NEW_PASSWORD = '/set-new-password/:token',
    PROFILE = '/profile',
    FRIENDS = '/friends',
    PROFILE_ID = '/profile/:userId',
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
