import "./style.scss";

import { OrderListProps } from "@/interfaces/orders";
import OrderListHeader from "./order-list-header";
import OrderCard from "./order-card";

export default function OrdersList({ status }: OrderListProps) {
  const orders = [1, 2];

  return (
    <div className="order-list">
      <OrderListHeader count={5} status={status} />
      <div className="order-list__item">
        <div className="order-list__group">
          {orders.map((ord) => (
            <OrderCard key={ord} />
          ))}
        </div>
      </div>
    </div>
  );
}
