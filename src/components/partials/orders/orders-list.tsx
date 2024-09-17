import "./style.scss";

import { OrderListProps } from "@/interfaces/orders";
import OrderListHeader from "./order-list-header";
import OrderCard from "./order-card";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { updateOrder } from "@/store/orders/orders";

export default function OrdersList({ status }: OrderListProps) {
  const { orders } = useAppSelector((state) => state.orders);
  const dispatch = useAppDispatch();

  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const rowData = event.dataTransfer.getData("text/plain");
    return dispatch(updateOrder({ id: Number(rowData), status }));
  };

  return (
    <div className="order-list" onDrop={handleDrop} onDragOver={handleDragOver}>
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
