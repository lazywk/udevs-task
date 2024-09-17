import "./style.scss";

import { OrderListProps } from "@/interfaces/orders";
import OrderListHeader from "./order-list-header";

export default function OrdersList({ status }: OrderListProps) {
  return (
    <div className="order-list">
      <OrderListHeader count={5} status={status} />
      <div className="order-list-item">
        <div>list items</div>
      </div>
    </div>
  );
}
