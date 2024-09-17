import httpBaseQuery from '@/utils/http'
import { createApi } from '@reduxjs/toolkit/query/react'

export const dashboardApi = createApi({
    reducerPath: 'dashboardApi',
    baseQuery: httpBaseQuery(),
    endpoints: () => ({})
})

export const { } = dashboardApi