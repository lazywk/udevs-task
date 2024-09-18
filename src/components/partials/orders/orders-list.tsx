import "./style.scss";

import { OrderListProps } from "@/interfaces/orders";
import OrderListHeader from "./order-list-header";
import OrderCard from "./order-card";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { updateOrder } from "@/store/orders/orders";

export default function OrdersList({ status }: OrderListProps) {
  const { orders } = useAppSelector((state) => state.orders);
  const dispatch = useAppDispatch();
  const myOrders = orders.filter((el) => el.status === status);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const rowData = event.dataTransfer.getData("text/plain");
    return dispatch(updateOrder({ id: Number(rowData), status }));
  };

  return (
    <div className="order-list" onDrop={handleDrop} onDragOver={handleDragOver}>
      <OrderListHeader count={myOrders.length} status={status} />
      <div className="order-list__item">
        <div className="order-list__group">
          {myOrders.map((ord, i) => (
            <OrderCard key={i} {...ord} />
          ))}
        </div>
      </div>
    </div>
  );
}
