import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import theme from './theme'

import dashboard from './dashboard/dashboard'
import { dashboardApi } from './dashboard/dashboardApi'

export const store = configureStore({
    reducer: {
        [dashboardApi.reducerPath]: dashboardApi.reducer,
        theme,
        dashboard,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            dashboardApi.middleware,
        ),
})

setupListeners(store.dispatch)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector