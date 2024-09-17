// ** Redux Imports
import { IOrderState } from '@/interfaces/orders'
import { createSlice } from '@reduxjs/toolkit'

const initialState: IOrderState = {
    orders: [
        {
            id: 9012,
            price: 310000,
            status: "new",
            time: "21:00",
            payment: "payme",
            details: [
                {
                    name: "Hot Dog",
                    count: 1,
                    comments: ["mnogo mayanez", "bez myas"],
                },
                {
                    name: "Pizza",
                    count: 3,
                    comments: ["goryachiy sous"],
                },
            ],
        },
        {
            id: 9013,
            price: 139,
            status: "ready",
            time: "21:05",
            payment: "click",
            details: [
                {
                    name: "Gamburger",
                    count: 5,
                    comments: ["Sous"],
                },
                {
                    name: "Cola 2L",
                    count: 1,
                },
            ],
        },
    ]
}

export const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        updateOrder: (state, action) => {
            const findedItem = state.orders.find(el => el.id === action.payload.id)
            const newItems = state.orders.filter(el => el.id !== findedItem.id)
            state.orders = [{ ...findedItem, status: action.payload.status }, ...newItems]
        }
    },
})

export const { updateOrder } = orderSlice.actions


export default orderSlice.reducer
