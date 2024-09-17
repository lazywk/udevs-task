export type orderStatus = 'new' | 'preparation' | 'ready' | 'shipping'

export interface OrderListProps {
    status: orderStatus
}

export interface OrderListHeaderType {
    status: orderStatus
    count: number
}

export type OrderPaymentType = 'click' | 'payme'

export interface OrderProductType {
    count: number
    name: string
    comments?: string[]
}

export interface OrderType {
    id: number
    price: number
    status: orderStatus
    payment: OrderPaymentType
    time: string
    details?: OrderProductType[]
}

export interface IOrderState {
    orders: OrderType[]
}