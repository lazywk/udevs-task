export type orderStatus = 'new' | 'preparation' | 'ready' | 'shipping'

export interface OrderListProps {
    status: orderStatus
}

export interface OrderListHeaderType {
    status: orderStatus;
    count: number;
}
