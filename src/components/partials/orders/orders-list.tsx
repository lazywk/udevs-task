import "./style.scss";

import { OrderListProps } from "@/interfaces/orders";
import OrderListHeader from "./order-list-header";
import OrderCard from "./order-card";
import { useAppSelector } from "@/store/store";

export default function OrdersList({ status }: OrderListProps) {
  const { orders } = useAppSelector((state) => state.orders);

  return (
    <div className="order-list">
      <OrderListHeader count={5} status={status} />
      <div className="order-list__item">
        <div className="order-list__group">
          {orders
            .filter((el) => el.status === status)
            .map((ord, i) => (
              <OrderCard key={i} {...ord} />
            ))}
        </div>
      </div>
    </div>
  );
}
